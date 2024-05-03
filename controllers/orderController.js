const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

// create new order
exports.createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const order = new orderModel(orderData);

    // Update stock quantities of products
    await Promise.all(
      orderData.products.map(async (product) => {
        // Find the product by ID and update its stock quantity
        await productModel.findByIdAndUpdate(
          product.product,
          { $inc: { stockQuantity: -product.quantity } }, // Decrease stock quantity by the ordered quantity
          { new: true } // Return the updated product
        );
      })
    );

    // Save the order
    await order.save();

    // Response sent to client side
    res.status(201).json({
      status: "success",
      message: "Order placed successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Failed to create order",
      error: error.message,
    });
  }
};

// get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orderData = await orderModel
      .find()
      .populate("customer")
      .populate("products.product");

    res.status(200).json({
      status: "success",
      data: orderData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// get the specific customer orders
exports.getOrdersByCustomerEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const orderData = await orderModel
      .find({})
      .populate({
        path: "customer",
        match: { email: email },
      })
      .populate("products.product");

    // Filter out orders with null customer (if any)
    const filteredOrders = orderData.filter((order) => order.customer !== null);

    res.status(200).json({
      status: "success",
      data: filteredOrders,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// delete a order
exports.cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const orderData = await orderModel.findByIdAndDelete(orderId);

    if (!orderData) {
      return res.status(404).json({
        status: "fail",
        message: "Order not found!",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Order deleted successfully",
      data: orderData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Unable to deleted the order",
      error: error.message,
    });
  }
};

// Controller function to calculate various metrics including total revenue, total profit, top selling products
exports.calculateMetrics = async (req, res) => {
  try {
    // Fetch all orders
    const allOrders = await orderModel.find();

    // Calculate total revenue
    const totalRevenue = allOrders.reduce((total, order) => {
      return total + order.totalAmount;
    }, 0);

    // Calculate top selling products
    const productsSold = allOrders.reduce((products, order) => {
      order.products.forEach((product) => {
        const existingProductIndex = products.findIndex(
          (p) => p._id === product.product._id
        );
        if (existingProductIndex !== -1) {
          products[existingProductIndex].quantity += product.quantity;
        } else {
          products.push({
            _id: product.product._id,
            name: product.product.name,
            quantity: product.quantity,
          });
        }
      });
      return products;
    }, []);

    res.status(200).json({
      status: "success",
      data: {
        totalRevenue,
        topSellingProducts: productsSold,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Failed to calculate metrics",
      error: error.message,
    });
  }
};
