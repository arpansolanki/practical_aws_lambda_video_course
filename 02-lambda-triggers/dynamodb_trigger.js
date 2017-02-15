'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    event.Records.forEach((record) => {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);
        console.log('Id', record.dynamodb.Keys.messageid.S);
        if(record.eventName=="INSERT")
        console.log('Item was inserted')
        if(record.eventName=="MODIFY")
        console.log('Item was modified')
        if(record.eventName=="REMOVE")
        console.log('Item was deleted')
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);
};
