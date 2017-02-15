console.log('loading lambda function');
exports.handler = (event, context, callback) => {
    // TODO implement
    console.log('Hello', event.name);
    callback(null, 'Hello '+event.name);
};