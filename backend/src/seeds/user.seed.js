import { config } from "dotenv";
import { connectDB } from "../db/db.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  {
    fullName: "bhoomi",
    email: "Bhoomii@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    profilePic:
      "https://plus.unsplash.com/premium_vector-1716874671235-95932d850cce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    fullName: "simran",
    email: "simrann@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    profilePic:
      "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.deleteMany({});
    await User.insertMany(seedUsers);

    console.log("✅ Users with images seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
