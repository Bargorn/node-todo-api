const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5991ca2d2d427db832ebffa2';

if(!ObjectID.isValid(id)){
  console.log('Id is invalid');
}

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos ', todos);
// });
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo ', todo);
// });
// Todo.findById(id).then((todos)=>{
//   if(!todos){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id ', todos);
// }).catch((e)=>console.log(e));

User.findById(id).then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }

  Console.log(JSON.stringify(user,undefined,2));

}), (e)=>{
  console.log(e);
}
