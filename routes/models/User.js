const mongooose = require('mongoose');

const UserSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongooose.model('user', UserSchema);
