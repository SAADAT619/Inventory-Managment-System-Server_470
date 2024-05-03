const productModel = require("../models/productModel");

// add new product
exports.addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const product = new productModel(productData);
    await product.save();
    res.status(201).json({
      status: "success",
      message: "Product added successfully",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const productData = await productModel.find();
    res.status(200).json({
      status: "success",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// get one product
exports.getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = await productModel.findById(productId);
    res.status(200).json({
      status: "success",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = await productModel.findByIdAndDelete(productId);

    if (!productData) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found!",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Unable to deleted the product",
      error: error.message,
    });
  }
};

// update the product stock quantity
exports.stockQuantityUpdate = async (req, res) => {
  try {
    const productId = req.params.id;
    const { stockQuantity } = req.body;

    const productData = await productModel.findByIdAndUpdate(
      productId,
      { stockQuantity: stockQuantity },
      { new: true }
    );

    if (!productData) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found!",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Stock Updated successfully",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Unable to update!",
      error: error.message,
    });
  }
};
