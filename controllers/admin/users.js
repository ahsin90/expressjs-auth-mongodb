export const users =  async (req, res) => {
	return res.status(200).json({status: true, message: "Users is a protected route"})
}