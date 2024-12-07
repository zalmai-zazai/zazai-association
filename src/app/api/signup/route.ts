import connectDB from "@/lib/db";
import User from "@/models/User";
import next from "next";
import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already existing",
        status: 409,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      message: "User Created Successfully",
      status: 201,
    });
  } catch (error) {
    console.error("Error during database operation:", error);
    return NextResponse.json({ message: "Connection Problem", status: 500 });
  }
}
