const mongoose = require("mongoose");
const Organization = require("./organization");
const Church = require('../models/church')


const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 150,
  },
  long_description: {
    type: String,
    minLength: 3,
    maxLength: 500,
  },
  church: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Church
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Organization
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: User
  // },
  attachment: {
    type: mongoose.Schema.Types.Mixed
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  start_time: {
    type: Number,
    required: true,
  },
  end_time: {
    type: Number,
    required: true,
  },
  event_type: {
    type: String, //online / offline
  },
  is_paid_event: {
    type: Boolean,
    default: false
  },
  is_featured_event: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // price: {
  //   type: mongoose.Schema.Types.Decimal128,
  //   default: 0
  // },
  address: {
    type: String,
  },
  streaming_link: {
    type: String,
  },
  rsvp: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("event", EventSchema);