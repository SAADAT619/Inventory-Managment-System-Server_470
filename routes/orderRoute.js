const express = require("express");
const {
  createOrder,
  getAllOrders,
  cancelOrder,
  getOrdersByCustomerEmail,
  calculateMetrics,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/order", createOrder);
router.get("/order", getAllOrders);
router.get("/order/:email", getOrdersByCustomerEmail);
router.delete("/order/:id", cancelOrder);
router.get("/metrics", calculateMetrics);

module.exports = router;
