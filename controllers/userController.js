const userModel = require("../models/userModel");

// create new user
exports.createUser = async (req, res) => {
  try {
    const existUser = await userModel.findOne({ email: req.body.email });
    if (existUser) {
      res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    } else {
      const userData = req.body;
      const user = new userModel(userData);
      await user.save();
      res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: userData,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const userData = await userModel.find();
    res.status(200).json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customerData = await userModel.find({ role: "customer" });
    res.status(200).json({
      status: "success",
      data: customerData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// Get user
exports.getUser = async (req, res) => {
  try {
    const email = req.params.email;
    const userData = await userModel.findOne({ email });
    res.status(200).json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// get admin
exports.getAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await userModel.findOne({ email: email });
    const isAdmin = user?.role === "admin";
    res.status(200).json({
      status: "success",
      admin: isAdmin,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
