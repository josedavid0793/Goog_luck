import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generateId from "../helpers/generateId.js";

const usersShema = mongoose.Schema({
  names: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: null,
    trim: true,
  },
  documenttype: {
    type: String,
    required: true,
  },
  documentnumber: {
    type: String,
    required: true,
    trim: true,
  },
  token: {
    type: String,
    default: generateId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});
usersShema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
usersShema.methods.comproPassword = async function(passwordForm){
return await bcrypt.compare(passwordForm,this.password);
};
const Users = mongoose.model("Users", usersShema);
export default Users;
