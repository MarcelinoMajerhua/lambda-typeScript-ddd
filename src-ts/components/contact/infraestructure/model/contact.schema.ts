import { Schema, model } from "mongoose";

const schema = new Schema({
  id: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
}, {
  versionKey: false
})

const ContactModel = model('contact', schema)

export default ContactModel
