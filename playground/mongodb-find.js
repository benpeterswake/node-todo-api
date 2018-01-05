//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('Connected to database!');

  const myDB = db.db('TodoApp');

  // myDB.collection('Todos').find({
  //   _id: new ObjectID('5a4f2d3e9229bf05c060854d')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fectch todos', err);
  // });

  // myDB.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos number: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fectch todos', err);
  // });

  myDB.collection('Users').find({
    name: 'Benjamin'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch user', err);
  })

  //db.close();
});
