import jwt from "jsonwebtoken"

export function jwtVerify(req, res, next) {
	// the middleware to verify access JWT access token 
	// get token from http headers request 
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	if (token == null) return res.sendStatus(401)

	const verify = jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
		console.log(err) // bar
	 	
	 	// access forbidden
	  	if (err) return res.sendStatus(403)
	  	req.user = decoded
    	next()
	});

}