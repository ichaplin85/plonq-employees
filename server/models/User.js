const { model, Schema, ObjectId } = require('mongoose');

const User = new Schema({
  fullName: {
    type: String,
    require: true,
  },
  birthdate: {
    type: Date,
    require: true
  },
  position: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true
  },
  department: {
    type: ObjectId, 
    ref: 'Department',
  }
})

module.exports = model('User', User);
