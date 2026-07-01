const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Get all employees
router.get(
  "/",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  getEmployees
);

// Get one employee
router.get(
  "/:id",
  authMiddleware,
  getEmployeeById
);

// Create employee (Admin only)
router.post(
  "/",
  authMiddleware,
  roleMiddleware("Admin"),
  createEmployee
);

// Update employee (Admin & Manager)
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  updateEmployee
);

// Delete employee (Admin only)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin"),
  deleteEmployee
);

module.exports = router;