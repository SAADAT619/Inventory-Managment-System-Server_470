const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  stockQuantityUpdate,
} = require("../controllers/productController");

const router = express.Router();

router.post("/product", addProduct);
router.get("/product", getAllProducts);
router.get("/product/:id", getProduct);
router.delete("/product/:id", deleteProduct);
router.patch("/product/stock-update/:id", stockQuantityUpdate);

module.exports = router;
