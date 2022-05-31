const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '請輸入您的名字']
    },
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    email: {
      type: String,
      required: [true, '請輸入您的 Email'],
      unique: true,
      lowercase: true,
      select: false
    },
    password: {
      type: String,
      required: [true, '密碼未填寫'],
      minlength: [8, '密碼至少 8 個字元以上'],
      select: false
    },
    photo: {
      type: String,
      default: '',
    },
    googleId:String
  },
  { versionKey: false }
);

const User = mongoose.model('user', userSchema);

module.exports = User;