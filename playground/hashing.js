const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var data = {
//   id: 10
// };
//
//
// var token = jwt.sign(data, 'abc123');
// console.log(token);
// var decoded = jwt.verify(token, 'abc123');
// console.log(decoded);

var password = '123abc!';

bcrypt.genSalt(10, (err, salt)=>{
  bcrypt.hash(password, salt, (err, hash)=>{
    console.log(hash)
  });
});

var hashedPassword = '$2a$10$kZ9aWm20tmSj2OP9xA54.eWc64d0yGzWu/./Ymx3ALb1bsSYaPu0e';

bcrypt.compare(password, hashedPassword, (err, result)=>{
  console.log(result);
});
