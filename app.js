import * as dotenv from 'dotenv'
import db from "./config/database.js"
import router from "./routes/routes.js"

import express from 'express'
import bodyParser from 'body-parser'

// load environtment variables
dotenv.config()

const app   = express()
const port  = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// use app routers
app.use(router)


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`)
})