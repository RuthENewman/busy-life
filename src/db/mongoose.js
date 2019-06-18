const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/busy-life-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email address is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = new User({
  name: 'Ruth',
  age: 30,
  email: 'ruth@gmail.com'
})


me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log('Oops there\'s an error: ', error)
})

const someoneElse = new User({
  name: 'Joe',
  email: 'joe@gmail.com'
})

someoneElse.save().then(() => {
  console.log(someoneElse)
}).catch((error) => {
  console.log('Oops there\'s an error: ', error)
})



const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const rehearsal = new Task({
  description: 'Attend ukulele group rehearsal',
  completed: false
})

rehearsal.save().then(() => {
  console.log(rehearsal)
}).catch((error) => {
  console.log('Oops there\'s an error: ', error)
})
