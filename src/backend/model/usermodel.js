const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  type: {
    type: String,
    required: true,
    default: "user"
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  numeComplet: {
    type: String,
    minlength: 6
  },
  Oras: {
    type: String,
    minlength: 1
  },
  nrtelefon: {
    type: String,
    minlength: 6
  },
  Judet: {
    type: String,
    minlength: 6
  },
  Strada: {
    type: String,
    minlength: 1
  },
}, {
  timestamps: true,
});

userSchema.set('toJSON', {

  transform: (document, returnedObject) => {

    returnedObject.id = returnedObject._id.toString()

    delete returnedObject._id

    delete returnedObject.__v

  }

})

const User = mongoose.model('User', userSchema);

module.exports = User;