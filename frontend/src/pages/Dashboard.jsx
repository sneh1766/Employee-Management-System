import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  useEffect(() => {
    if (role === "Admin" || role === "Manager") {
      API.get("/employees")
        .then((res) => setEmployees(res.data))
        .catch((err) => console.log(err));
    }
  }, [role]);

  const totalEmployees = employees.length;
  const totalAdmins = employees.filter(
    (emp) => emp.role === "Admin"
  ).length;

  const totalManagers = employees.filter(
    (emp) => emp.role === "Manager"
  ).length;

  const totalStaff = employees.filter(
    (emp) => emp.role === "Employee"
  ).length;

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card shadow p-4">

          <h2>Welcome, {name}</h2>

          <h4 className="text-primary">
            Role : {role}
          </h4>

          <hr />

          <div className="mb-4">

            {(role === "Admin" || role === "Manager") && (
              <button
                className="btn btn-success me-3"
                onClick={() => navigate("/employees")}
              >
                Manage Employees
              </button>
            )}

            <button
              className="btn btn-info"
              onClick={() => navigate("/profile")}
            >
              My Profile
            </button>

          </div>

          {(role === "Admin" || role === "Manager") && (
            <>

              <h4 className="mb-3">
                Dashboard Statistics
              </h4>

              <div className="row">

                <div className="col-md-3 mb-3">

                  <div className="card bg-primary text-white text-center p-3">

                    <h5>Total Employees</h5>

                    <h2>{totalEmployees}</h2>

                  </div>

                </div>

                <div className="col-md-3 mb-3">

                  <div className="card bg-success text-white text-center p-3">

                    <h5>Admins</h5>

                    <h2>{totalAdmins}</h2>

                  </div>

                </div>

                <div className="col-md-3 mb-3">

                  <div className="card bg-warning text-dark text-center p-3">

                    <h5>Managers</h5>

                    <h2>{totalManagers}</h2>

                  </div>

                </div>

                <div className="col-md-3 mb-3">

                  <div className="card bg-danger text-white text-center p-3">

                    <h5>Employees</h5>

                    <h2>{totalStaff}</h2>

                  </div>

                </div>

              </div>

            </>
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;