import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let converstation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!converstation) {
      converstation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      converstation.message.push(newMessage._id);
    }

    /* await converstation.save();
    await newMessage.save(); */

    await Promise.all([converstation.save(), newMessage.save()]);

    //SOCKET IO FUNCTIONALITY WILL GO HERE
    const ReceiverSocketId = getReceiverSocketId(receiverId);
    if (ReceiverSocketId) {
      //io.to(<socket_id>).emit() used to send events to specific client
      io.to(ReceiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message"); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.message;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in sendMessage controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
