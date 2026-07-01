const User = require("../models/User");

// ================= Get All Employees =================
exports.getEmployees = async (req, res) => {
  try {
    const employees = await User.find().select("-password");
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= Get Single Employee =================
exports.getEmployee = async (req, res) => {
  try {
    const employee = await User.findById(req.params.id).select("-password");

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= Create Employee =================
exports.createEmployee = async (req, res) => {
  try {
    const employee = await User.create(req.body);

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= Update Employee =================
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(employee);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= Delete Employee =================
exports.deleteEmployee = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "Employee Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= View Own Profile =================
exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= Update Own Profile =================
exports.updateMyProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        email,
      },
      {
        new: true,
      }
    ).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= Change User Role =================
exports.changeUserRole = async (req, res) => {
  try {
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        role,
      },
      {
        new: true,
      }
    ).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};