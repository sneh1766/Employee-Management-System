import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddEmployee() {

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
if(
!form.name ||
!form.email ||
!form.password
){

alert("All fields are required");

return;

}
  const submit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/employees", form);

      alert("Employee Added");

      navigate("/employees");

    } catch (err) {

      alert(err.response?.data?.message || "Something went wrong");

    }

  };

  return (
         <>
    <div className="container mt-5">

      <h2>Add Employee</h2>

      <form onSubmit={submit}>

        <input className="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} />

        <input className="form-control mb-3" name="email" placeholder="Email" onChange={handleChange} />

        <input className="form-control mb-3" name="password" placeholder="Password" onChange={handleChange} />

        <select className="form-select mb-3" name="role" onChange={handleChange}>
          <option>Employee</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>

        <button className="btn btn-success">Save</button>

      </form>

    </div>
</>
  );

}

export default AddEmployee;