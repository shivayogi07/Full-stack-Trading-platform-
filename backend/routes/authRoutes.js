const express = require("express");

const {
  signup,
  login,
  logout,
  getMe,
} = require("../controllers/authController");

const { isAuthenticated } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", isAuthenticated, getMe);

module.exports = router;