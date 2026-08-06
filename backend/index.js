require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { isAuthenticated } = require("./middleware/authMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

/* ========================= MIDDLEWARE ========================= */

app.use(bodyParser.json());

app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://full-stack-trading-platform-npnm4m86h-shivayogi-ds-projects.vercel.app",
    ],
    credentials: true,
  })
);

/* ========================= AUTH ROUTES ========================= */

app.use("/api/auth", authRoutes);

/* ========================= HOLDINGS ========================= */

app.get("/allHoldings", isAuthenticated, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});

    res.status(200).json({
      success: true,
      holdings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ========================= POSITIONS ========================= */

app.get("/allPositions", isAuthenticated, async (req, res) => {
  try {
    const positions = await PositionsModel.find({});

    res.status(200).json({
      success: true,
      positions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ========================= BUY ORDER ========================= */

app.post("/newOrder", isAuthenticated, async (req, res) => {
  try {
    const order = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: "Order Saved Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ========================= SELL ORDER ========================= */

app.post("/sellOrder", isAuthenticated, async (req, res) => {
  try {
    const order = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: "SELL",
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: "Sell Order Saved Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ========================= DATABASE ========================= */

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server Running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err);
  });