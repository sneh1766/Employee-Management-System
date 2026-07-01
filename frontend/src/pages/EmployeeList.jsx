import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const fetchEmployees = async () => {
    try {
      const res = await API.get(`/employees?search=${search}`);
      setEmployees(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Unable to fetch employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [search]);

  const deleteEmployee = async (id) => {
    if (!window.confirm("Delete this employee?")) return;

    try {
      await API.delete(`/employees/${id}`);

      alert("Employee Deleted Successfully");

      fetchEmployees();
    } catch (err) {
      alert(err.response?.data?.message || "Delete Failed");
    }
  };

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  const lastIndex = currentPage * recordsPerPage;

  const firstIndex = lastIndex - recordsPerPage;

  const records = employees.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(employees.length / recordsPerPage);

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="mb-3">
          Employee List
        </h2>

        <input
          className="form-control mb-3"
          placeholder="Search Employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {(role === "Admin" || role === "Manager") && (

          <button
            className="btn btn-success mb-3"
            onClick={() => navigate("/add-employee")}
          >
            Add Employee
          </button>

        )}

        <div className="table-responsive">

          <table className="table table-bordered table-striped">

            <thead className="table-dark">

              <tr>

                <th>Name</th>

                <th>Email</th>

                <th>Role</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {records.map((emp) => (

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

        <div className="d-flex justify-content-center mt-4">

          <button
            className="btn btn-secondary me-3"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          <h5 className="mt-2">
            Page {currentPage} of {totalPages}
          </h5>

          <button
            className="btn btn-secondary ms-3"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>

        </div>

      </div>
    </>
  );
}

export default EmployeeList;