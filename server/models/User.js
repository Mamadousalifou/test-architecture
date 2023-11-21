import mongoose from "mongoose";
import { PasswordHash } from "../utils/PasswordHash.js";

const userSchema = new mongoose.Schema({

       firstname:{
          type:String,
          required:true,
          min:5,
          max:255,
          trim:true
       },
       lastname:{
        type:String,
        required:true,
        min:5,
        max:255,
        trim:true
     },
     username:{
        type:String,
        required:true,
        min:5,
        max:255,
        trim:true
     },

     email:{
        type:String,
        required:true,
        unique:true,
     },

     password:{

         type:String,
         required:true
     },

     birthDate:{
       
         type:Date
     }
},{
 
     timestamps:true
});


userSchema.pre('save',async function(done){

    if(this.isModified('password')){

         const hasedPassword = await PasswordHash.toHash(this.get('password'));
         this.set('password',hasedPassword);
    }
      

   done();
})

export const User = mongoose.model('User',userSchema);