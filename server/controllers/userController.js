
import { connectToDatabase,disconnectFromDatabase } from "../config/database.js";
import { User } from "../models/User.js";


export const getUsers = async (req,res) => {

     
   
    await connectToDatabase();

     res.status(200).json({

         data:'success'
    })

await disconnectFromDatabase();
}

export const addUser = async (req,res) => {

    await connectToDatabase();
   const {lastname,firstname,email,password,username} = req.body;


   try {

      const userExists = await User.findOne({
       email: email
      });


      if(userExists){

          return res.status(400).json({
             message: 'User already exists'
          })
      }

      const user = await User.create({

           email: email,
           password: password,
           lastname: lastname,
           firstname: firstname,
           username:username
      })

      return res.status(200).json({
         message: 'User created',
         data:user
      })


      


   }catch(error){

    console.log(error);
    return res.status(500).json({

          message:'Something went wrong'
    })

   }


}