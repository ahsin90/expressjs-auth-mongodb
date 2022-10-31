import express from "express"
import {jwtVerify} from "../middleware/auth.js"

import {login} from "../controllers/login.js"
import {register} from "../controllers/register.js"

// import admin controllers 
import {dashboard} from "../controllers/admin/dashboard.js"
import {users} from "../controllers/admin/users.js"

// Init express router
const router = express.Router();

router.post('/login', login)
router.post('/register', register)

// admin routes
router.use('/admin', jwtVerify)
router.get('/admin/dashboard', dashboard)
router.get('/admin/users', dashboard)

export default router;
