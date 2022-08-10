const { model, Schema, ObjectId } = require('mongoose');

const Department = new Schema({
  title: {
    type: String,
    require: true,
  },
  users: [{type: ObjectId, ref:'User'}],
})

module.exports = model('Department', Department);
