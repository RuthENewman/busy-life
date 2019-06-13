const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

// const { MongoClient, ObjectID } = require('mongdodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'busy-life';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp())
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'Ruth',
  //   age: 30
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }
  //   console.log(result.ops)
  // })
  //
  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Eat at Borough Market',
  //     completed: false,
  //   },
  //   {
  //     description: 'Take photos at Houses of Parliament',
  //     completed: false,
  //   },
  //   {
  //     description: 'Visit Van Gogh exhibition',
  //     completed: true,
  //   },
  //   {
  //     description: 'Take in the view at Sky Garden',
  //     completed: false,
  //   },
  //   {
  //     description: 'Walk by the river to Tower Bridge',
  //     completed: false,
  //   },
  //   {
  //     description: 'Watch a show on the West End',
  //     completed: false,
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks')
  //   }
  //
  //   console.log(result.ops)
  // })
})
