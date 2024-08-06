const mongoose = require("mongoose");


const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  denomination: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  churches: {
    type: Array,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  deactive: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

module.exports = mongoose.model("organization", organizationSchema);