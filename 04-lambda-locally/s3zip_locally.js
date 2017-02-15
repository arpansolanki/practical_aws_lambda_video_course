 
var fs = require('fs')
var join = require('path').join
var s3Zip = require('s3-zip')
 
var region = 'us-east-1'
var bucket = 'asolanki'
var folder = 'files/'
var file1 = 'input.txt'

var output = fs.createWriteStream(join(__dirname, 'use-s3-zip.zip'))
 
s3Zip
  .archive({ region: region, bucket: bucket}, folder, [file1])
  .pipe(output)