const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  Nume: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  Localitate: {
    type: String,
    required: true,
    minlength: 6
  },
  Judet: {
    type: String,
    minlength: 2
  },
  Strada: {
    type: String,
    minlength: 1
  },
  Numar_telefon: {
      type:String,
      minlength:6
  }
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

const Magazin = mongoose.model('Magazin', userSchema);

module.exports = Magazin;