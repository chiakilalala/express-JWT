const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users =require('../models/userModel');
const bcrypt = require('bcryptjs');
const dotenv =require('dotenv');
dotenv.config({path:'./config.env'});

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3008//users/google/callback",
    scope: [ 'profile' ],
    state:true
   
  },
  async(accessToken, refreshToken, profile, cb)=> {
      const user =await  Users.findOne({ googleId:profile.id});
      console.log( profile,'profile')
      if(user){
        console.log('使用者已存在')
        return cb(null, profile );
      }

      const password = await bcrypt.hash('U2FsdGVkX18tqLrYlTFQ+NsFwR6QZp8Eyay4XOXZRKA=',12);
      const newUser =await Users.create({
        email:profile.emails[0].value,
        name:profile.displayName,
        password,
        googleId:profile.id

      })
      return cb(null, newUser );
      
    
  }
));
