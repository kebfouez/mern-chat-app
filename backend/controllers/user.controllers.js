import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filterdUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    ); // to return all the other users exsept the logged in user and the select part so we dont return the password

    res.status(200).json(filterdUsers);
  } catch (error) {
    console.log("Error in getUserForSidebar :", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
