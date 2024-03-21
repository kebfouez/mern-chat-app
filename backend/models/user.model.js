import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      requird: true,
    },
    password: {
      type: String,
      requird: true,
      minlength: 6,
    },
    gender: {
      type: String,
      require: true,
      enum: ["male", "female"],
    },
    profilPic: {
      type: String,
      default: "",
    },
  },
  //createdAt, updatedAt
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
