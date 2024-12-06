import mongoose from "mongoose";

interface Mschema extends Document {
  firstname: String;
  lastname: String;
  email: String;
  homeaddress: String;
  job: String;
  paidamount: Number;
}

const MemberSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  homeaddress: { type: String, required: true },
  job: { type: String, required: true },
  paidamount: { type: Number, required: true },
});

const Member =
  mongoose.models.Member || mongoose.model<Mschema>("Member", MemberSchema);

export default Member;
