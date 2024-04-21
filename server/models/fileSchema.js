import { Schema, model } from "mongoose";

const File = new Schema({
  name: String,
  type: String,
  size: Number,
  data: Buffer,
  userId: { type: String, ref: "User" }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

File.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default model("File", File);
