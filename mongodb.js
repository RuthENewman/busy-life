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
  //
  // db.collection('tasks').updateOne({
  //   _id: new ObjectID("5d01814593183bc5cf4b4815")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then(() => {
  //   console.log(result)
  // }).catch(() => {
  //   console.log(error)
  // })

  // db.collection('users').updateOne({
  //     _id: new ObjectID("5d026b53678bcbc8db01ead2")
  //   }, {
  //     $inc: {
  //       age: 1
  //     }
  //   }).then(() => {
  //     console.log(result)
  //   }).catch(() => {
  //     console.log(error)
  //   })

  db.collection('tasks').updateMany({
    completed: false
  }, {
    $set: {
      completed: true
    }
  }).then(() => {
    console.log(result.modifiedCount)
  }).catch(() => {
    console.log(error)
  })
})
