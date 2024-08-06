const mongoose = require("mongoose");
const Organization = require("./organization");
const Church = require('../models/church')


const LiveChurchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  youtube_url: {
    type: String,
    required: true,
    trim: true
  },
  description: {
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
  // attachment: {
  //   type: mongoose.Schema.Types.Mixed
  // },
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
  disabled: {
    type: Boolean,
    default: false
  },
  streaming_link: {
    type: String,
  },
}, { timestamps: true });

module.exports =  mongoose.model("live_church", LiveChurchSchema);