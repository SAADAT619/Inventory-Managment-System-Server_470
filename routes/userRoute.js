const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  getAdmin,
  getAllCustomers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/customer", getAllCustomers);
router.get("/user/:email", getUser);
router.get("/admin/:email", getAdmin);

module.exports = router;
