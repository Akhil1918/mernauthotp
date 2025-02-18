const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  otp: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300 // OTP expires after 5 minutes
  }
})

OTPSchema.index({ email: 1 }, { unique: true })

module.exports = mongoose.model('OTP', OTPSchema) 