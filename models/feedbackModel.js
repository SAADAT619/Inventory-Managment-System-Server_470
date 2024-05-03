const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedbacks", feedbackSchema);
