const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5a51729ab19f064bd0e7a4ec').then((todo) => {
//   console.log(todo);
// });
