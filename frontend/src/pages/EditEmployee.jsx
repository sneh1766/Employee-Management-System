import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditEmployee() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {

    API.get(`/employees/${id}`)
      .then((res) => setForm(res.data))
      .catch(() => alert("Error"));

  }, [id]);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const submit = async (e) => {

    e.preventDefault();

    await API.put(`/employees/${id}`, form);

    alert("Employee Updated");

    navigate("/employees");

  };

  return (
<>
    <div className="container mt-5">

      <h2>Edit Employee</h2>

      <form onSubmit={submit}>

        <input className="form-control mb-3" name="name" value={form.name} onChange={handleChange} />

        <input className="form-control mb-3" name="email" value={form.email} onChange={handleChange} />

        <select className="form-select mb-3" name="role" value={form.role} onChange={handleChange}>
          <option>Employee</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>

        <button className="btn btn-primary">Update</button>

      </form>

    </div>
</>
  );

}

export default EditEmployee;