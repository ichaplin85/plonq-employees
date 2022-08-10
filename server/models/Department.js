const { model, Schema, ObjectId } = require('mongoose');

const Department = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  users: [{ type: ObjectId, ref: 'User' }],
})

module.exports = model('Department', Department);
