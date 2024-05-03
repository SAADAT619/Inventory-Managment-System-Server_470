const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

// MongoDB connect
mongoose
  .connect(`${process.env.DB_URL}`)
  .then(() => {
    console.log("Database Connection Established");
  })
  .catch((err) => {
    "Database Connection Failed: " + err;
  });
