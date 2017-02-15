console.log('Loading...')

var AWS = require('aws-sdk')
var s3Zip = require('s3-zip')

exports.handler = function (event, context, callback) {
  console.log('event', event)


  var region = 'us-east-1'
  var bucket = 'asolanki'
  var folder = 'files/'
  var files = ['input.txt']
  var zipFileName = 'output.zip'

  // Create body stream
  try {

    var body = s3Zip.archive({ region: region, bucket: bucket}, folder, files)
    var zipParams = { params: { Bucket: bucket, Key: folder + zipFileName } }
    var zipFile = new AWS.S3(zipParams)
    zipFile.upload({ Body: body })
      .on('httpUploadProgress', function (evt) { console.log(evt) })
      .send(function (e, r) { 
        if (e) {
          var err = 'zipFile.upload error ' + e
          console.log(err)  
          callback("zip file upload error",null) ;   
         
        } 
        console.log(r) 
        callback(null,r)
        
      })

  } catch (e) {
    var err = 'catched error: ' + e
    console.log(err) 
    callback(err,null)   
    
  }

}