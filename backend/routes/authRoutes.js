const express = require("express");

const router = express.Router();

const {
  register,
  login,
  logout,
  getCurrentUser,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", register);

router.post("/login", login);

router.get("/me", authMiddleware, getCurrentUser);

router.post("/logout", authMiddleware, logout);

module.exports = router;