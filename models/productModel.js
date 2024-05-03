const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    batchNumber: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: Date,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    stockLimit: {
      type: Number,
      required: true,
    },
    minimumStockLimit: {
      type: Number,
      required: true,
    },
    warehouseLocation: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
