const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
        quantity: Number,
      },
    ],
    status: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    billingAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Orders", orderSchema);
