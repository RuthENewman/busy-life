const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

// const { MongoClient, ObjectID } = require('mongdodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'busy-life';

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database')
  }

  const db = client.db(databaseName)

  // db.collection('users').deleteMany({
  //   age: 30
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  db.collection('tasks').deleteOne({
    description: "Take in the view at Sky Garden"
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})
