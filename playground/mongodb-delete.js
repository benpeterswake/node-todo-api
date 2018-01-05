//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database');
  }
  console.log('Connected to database!');

  const myDB = db.db('TodoApp');

  // deleteMany
  // myDB.collection('Todos').deleteMany({text: 'buy water bottles'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // myDB.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete
  // myDB.collection("Todos").findOneAndDelete({ text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // myDB.collection('Users').deleteMany({ name: 'Benjamin'}).then((result) => {
  //   console.log(result);
  // });

  myDB.collection('Users').findOneAndDelete({
    _id : new ObjectID("5a5000773aee97a08cf5cd10")
  }).then((result) => {
    console.log(result);
  })


  //db.close();
});
