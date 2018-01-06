const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a50629b3740b5236c545473';
var iduser = '5a50273b18ee541f84a8079d'

if (!ObjectID.isValid(id)){
  console.log('ID not valid');
}
if (!ObjectID.isValid(iduser)){
  console.log('ID not valid');
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('id not found');
  }
  console.log('Todo By Id: ', todo);
});

User.findById(iduser).then((user) => {
  if (!user){
    return console.log('id not found');
  }
  console.log('User By Id: ', user);
});
