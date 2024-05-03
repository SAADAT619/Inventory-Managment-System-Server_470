const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/databaseConn");
const port = process.env.PORT || 4000;
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(
  cors({ origin: "*", methods: ["GET", "POST", "PUT", "PATCH", "DELETE"] })
);

// HOME ROUTE
app.get("/", (req, res) => {
  res.status(200).send("Inventory Management Server is Running...");
});

// IMPORT ROUTES
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const feedbackRoute = require("./routes/feedbackRoute");

// ROUTES HERE
app.use("/api/v1", userRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", feedbackRoute);

// LISTENING SERVER
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

// IF ROUTE NOT FOUND
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found!",
  });
});

// IF SERVER ERROR
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something broke!",
  });
});
