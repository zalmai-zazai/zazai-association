import connectDB from "@/lib/db";
import Member from "@/models/Member";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstname, lastname, email, homeaddress, job, paidamount } =
      await req.json();
    const existingMember = await Member.findOne({ firstname });
    if (existingMember) {
      return NextResponse.json({
        message: "Member Already existing!",
        status: 400,
      });
    } else {
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
    }
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

// DELETE: Delete a member by their ID
export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const { id } = await req.json(); // Get member ID from the request body
    const deletedMember = await Member.findByIdAndDelete(id); // Delete member from database

    if (!deletedMember) {
      return NextResponse.json({ message: "Member not found", status: 404 });
    }

    return NextResponse.json({
      message: "Member deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.log("db error", error);
    return NextResponse.json({ message: "Error deleting member", status: 500 });
  }
}
