const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/busy-life-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

// const me = new User({
//   name: 'Ruth',
//   age: 30
// })
//
// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Oops there\'s an error: ', error)
// })

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
