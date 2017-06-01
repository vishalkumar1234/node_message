var twilio = require('twilio');
var sid = 'ACc177a423f5086d6bee5db57b6f110c7c' //twilio sid
var token = '11c9c863f68b2300a96ffbc74353b854' //twilio token
//sid and token avaible on twilio account dashboard
var client = new twilio(sid,token);
//Send message
client.messages.create({
body: 'Hello  krishna from Node', // Message
to: '+919098530128', // Receiver's number
from: '+1 720-399-4429 ' // valid Twilio number. Can be generarted after creating twilio account.
}, function(err, message) {
if (err) { //Cecking for error
console.error('Text failed because: ' + err.message);
} else {
console.log('Text sent! Message SID: ' + message.sid);
}
});
