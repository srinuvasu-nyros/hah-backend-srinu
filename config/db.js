const { logger } = require("../utils/common/logger");
const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.DATABASE_URL;
mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    logger.info("MongoDB is Connected...");
  } catch (err) {
    logger.error("MongoDB connection failed: " + err.message);
    setTimeout(() => {
      connectDB();
    }, 3000)
  }
};

module.exports = connectDB;
