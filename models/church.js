const mongoose = require("mongoose");
const Organization = require("./organization");

const churchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  parent_organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Organization,
    required: true
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
  // timezone: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // ref: TimeZone,
  //   // required: true
  // },
  website: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  alt_email: {
    type: String
  },
  mobile: {
    type: String,
    required: true
  },
  alt_mobile: {
    type: String
  },
  deactive: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

module.exports = mongoose.model("church", churchSchema);