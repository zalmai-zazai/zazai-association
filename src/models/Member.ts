import mongoose from "mongoose";

interface Mschema extends Document {
  firstname: String;
  lastname: String;
  email: String;
  homeaddress: String;
  job: String;
  paidamount: Number;
  familymembers: Number;
  date: Date;
}

const MemberSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  homeaddress: { type: String, required: true },
  job: { type: String, required: true },
  paidamount: { type: Number, required: true },
  familymembers: { type: Number, required: true },
  date: { type: Date },
});

const Member =
  mongoose.models.Member || mongoose.model<Mschema>("Member", MemberSchema);

export default Member;
