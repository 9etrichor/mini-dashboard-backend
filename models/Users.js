const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  msg: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;