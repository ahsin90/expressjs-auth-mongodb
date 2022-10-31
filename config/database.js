import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';


// connect to mongodb server
const db = mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/?authSource='+process.env.DB_NAME).then(
    () => { console.log('Database connected') },
    err => { console.log("Can't connect to the database "+ err) }
);

// export connection
export default db;