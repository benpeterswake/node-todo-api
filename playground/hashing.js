const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bc = require('bcryptjs');

var password = '123abc!';
//
// bc.genSalt(10, (err, salt) => {
//   bc.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });
//
// var hashedPassword = '$2a$10$.fuB/E4EHb3A9KbG5nQK.uBlkbZZnPyVEc8w9zvoIVSsP1UUOQYE6'
//
// bc.compare(password, hashedPassword, (err, res) => {
//   console.log(res);
// });

// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123abc');
// var decoded = jwt.verify(token, '123abc')
//
// console.log(token);
// console.log(decoded);
// var message = 'I am user number 2';
//
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('data was not changed');
// } else {
//   console.log('data was changed');
// }
