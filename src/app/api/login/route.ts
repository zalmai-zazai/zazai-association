import connectDB from "@/lib/db";
import User from "@/models/User";
import bcryt from "bcrypt";
import next from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return NextResponse.json({
        message: "User was not found",
        status: 404,
      });
    }
    const comparePasword = await bcryt.compare(password, existingUser.password);
    if (!comparePasword) {
      return NextResponse.json({
        message: "User name or password is incorrect!",
        status: 500,
        messageStatus: "incorrect",
      });
    }
    const loginUser = existingUser.username;
    return NextResponse.json({
      message: "success",
      status: 2001,
      user: loginUser,
    });
  } catch (error) {
    return NextResponse.json({ message: "Connection Problem" });
  }
}
