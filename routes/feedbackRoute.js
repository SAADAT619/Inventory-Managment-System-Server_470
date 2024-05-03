const express = require("express");
const {
  createFeedback,
  getAllFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");

const router = express.Router();

router.post("/feedback", createFeedback);
router.get("/feedback", getAllFeedback);
router.delete("/feedback/:id", deleteFeedback);

module.exports = router;
