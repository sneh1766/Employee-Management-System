const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const { changeUserRole } = require("../controllers/employeeController");

router.put(
  "/:id/role",
  authMiddleware,
  roleMiddleware("Admin"),
  changeUserRole
);

module.exports = router;