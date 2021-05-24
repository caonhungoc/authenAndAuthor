const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    email: {type: String, required: true, maxLength: 100},
    password: {type: String, required: true, maxLength: 100},
    user_type: {type: String, default: "normal"},
  }
);

//Export model
module.exports = mongoose.model('User', UserSchema);
