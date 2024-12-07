import connectDB from "@/lib/db";
import Member from "@/models/Member";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstname, lastname, email, homeaddress, job, paidamount } =
      await req.json();

    const newMember = new Member({
      firstname,
      lastname,
      email,
      homeaddress,
      job,
      paidamount,
    });
    await newMember.save();
    return NextResponse.json({
      message: "Member Added Successfully!",
      status: 201,
    });
  } catch (error) {
    console.log("internal error", error);
    return NextResponse.json({ message: "Server error", status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const data = await Member.find({});

    return NextResponse.json({ data });
  } catch (error) {
    console.log("db error", error);
    return NextResponse.json({ message: "Error in backend" });
  }
}
