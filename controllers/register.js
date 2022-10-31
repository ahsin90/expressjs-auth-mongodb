import jwt from "jsonwebtoken"
import Users from "../models/users.model.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
	try {
		// generate password's salt
		const salt = await bcrypt.genSalt(10);

		// hash the password before store into database
		req.body.password = await bcrypt.hash(req.body.password, salt);

		// create user
		let user = new Users(req.body)

		let save = await user.save(function (err) {

			if(err){
				res.status(401).json({status: false, message: "Error! Something went wrong."})
			}else{
				res.status(200).json({status : true, data : "User created"})
			}
		})

	} catch(err){
		console.log(err)
		res.status(200).json({status: false, message: "Error! Failed to created user"});
	}
}