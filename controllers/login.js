import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import * as dotenv from 'dotenv'
dotenv.config()
import Users from "../models/users.model.js"

export const login =  async (req, res) => {
	try{
		let { email, password } = req.body;
	
		// find user in the database
		let user = Users.findOne({email: email}, async function (err, user) {
			if(user){
				// validate the password
				const validPassword = await bcrypt.compare(password, user.password)

				if( !validPassword ){
					await res.status(401).json({status: false, message: "Password was not match!"})
				}else{
					// create a token
	  				let token = await jwt.sign({userId: user._id, email: user.email}, process.env.SECRET_KEY, { expiresIn: "24h" });

	  				if( token ){
	  					user.password = undefined
	  					user.token = token
						await res.status(200).json({status: true, data: user})
					}
				}
				
			}else{
				await res.status(401).json({status: false, message: "email was not found"})
			}
		}).lean()

	}catch(err){
		console.log(err)
		await res.status(200).json({status: false, message: "Something went wrong!"})
	}
}

