import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error fetching employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    if (!window.confirm("Delete this employee?")) return;

    try {
      await API.delete(`/employees/${id}`);
      alert("Employee Deleted");
      fetchEmployees();
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <>
    <div className="container mt-4">

      <h2>Employee List</h2>

      {(role === "Admin" || role === "Manager") && (
        <button
          className="btn btn-success mb-3"
          onClick={() => navigate("/add-employee")}
        >
          Add Employee
        </button>
      )}

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp._id}>

              <td>{emp.name}</td>

              <td>{emp.email}</td>

              <td>{emp.role}</td>

              <td>

                {(role === "Admin" || role === "Manager") && (
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => navigate(`/edit/${emp._id}`)}
                  >
                    Edit
                  </button>
                )}

                {role === "Admin" && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEmployee(emp._id)}
                  >
                    Delete
                  </button>
                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
    </>
  );
}

export default EmployeeList;