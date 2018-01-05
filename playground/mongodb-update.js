//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('Connected to database!');

  const myDB = db.db('TodoApp');

  // findOneAndUpdate
  // myDB.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a4ffe163aee97a08cf5cc40')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  myDB.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a4ff419ef19340c207fbb81")
  }, {
    $set: {
      name: 'Benjamin'
    },
    $inc: {
      age: +1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  //db.close();
});
