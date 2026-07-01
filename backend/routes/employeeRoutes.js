const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getMyProfile,
  updateMyProfile,
  changeUserRole,
} = require("../controllers/employeeController");

// =========================
// Admin & Manager
// View All Employees
// =========================
router.get(
  "/",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  getEmployees
);

// =========================
// Admin & Manager
// View Single Employee
// =========================
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  getEmployee
);

// =========================
// Admin & Manager
// Add Employee
// =========================
router.post(
  "/",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  createEmployee
);

// =========================
// Admin & Manager
// Update Employee
// =========================
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  updateEmployee
);

// =========================
// Admin Only
// Delete Employee
// =========================
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin"),
  deleteEmployee
);

// =========================
// All Users
// View Own Profile
// =========================
router.get(
  "/profile/me",
  authMiddleware,
  getMyProfile
);

// =========================
// All Users
// Update Own Profile
// =========================
router.put(
  "/profile/me",
  authMiddleware,
  updateMyProfile
);

// =========================
// Admin Only
// Change User Role
// =========================
router.put(
  "/change-role/:id",
  authMiddleware,
  roleMiddleware("Admin"),
  changeUserRole
);

module.exports = router;