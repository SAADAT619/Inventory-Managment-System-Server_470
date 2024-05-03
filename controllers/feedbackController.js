const feedbackModel = require("../models/feedbackModel");

// add new feedback
exports.createFeedback = async (req, res) => {
  try {
    const feedbackData = req.body;
    const feedback = new feedbackModel(feedbackData);
    await feedback.save();
    res.status(201).json({
      status: "success",
      message: "Feedback added successfully",
      data: feedbackData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// get all feedbacks
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbackData = await feedbackModel.find().populate("customer");
    res.status(200).json({
      status: "success",
      data: feedbackData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// delete a feedback
exports.deleteFeedback = async (req, res) => {
  try {
    const feedbackId = req.params.id;
    const feedbackData = await feedbackModel.findByIdAndDelete(feedbackId);

    if (!feedbackData) {
      return res.status(404).json({
        status: "fail",
        message: "Feedback not found!",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Feedback deleted successfully",
      data: feedbackData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Unable to deleted the feedback",
      error: error.message,
    });
  }
};
