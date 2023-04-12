const mongoose = require("mongoose");
const Message = mongoose.Schema(
  {
    content: { type: String, trim: true },

    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
    },
  },
  {
    timestamps: true,
  }
);
const messageModel = mongoose.model("Message", Message);
module.exports = messageModel;
