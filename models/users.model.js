import db from "../config/database.js"
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let Users = new Schema({
  email: { type: String },
  name: { type: String },
  password: { type: String },
  date: { type: Date }
});


// Export model
export default mongoose.model('Users', Users);;