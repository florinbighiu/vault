import { Schema, model } from "mongoose";

const userSchema = new Schema({
  uniqueId: String,
});

export default model("User", userSchema);