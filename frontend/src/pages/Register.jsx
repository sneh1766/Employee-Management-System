import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Employee",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "450px" }}>

        <h2 className="text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <select
            className="form-select mb-3"
            name="role"
            onChange={handleChange}
          >
            <option>Employee</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;