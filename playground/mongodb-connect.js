//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('Connected to database!');

  const myDB = db.db('TodoApp');

  myDB.collection('Todos').insertOne({
    text: 'Walk the dog',
    completed: false
  }, (err, result) => {
    if (err){
      return console.log('Unable to insert item', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // myDB.collection('Users').insertOne({
  //   name: 'Benjamin',
  //   age: 23,
  //   location: 'Kennesaw, Ga'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert into users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
