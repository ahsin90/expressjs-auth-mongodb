export const dashboard =  async (req, res) => {
	return res.status(200).json({status: true, message: "Dashboard is protected route"})
}