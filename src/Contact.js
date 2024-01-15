const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLength: 21,
  },
});
const Contact = new model("Contact", userSchema);
module.exports = Contact;
