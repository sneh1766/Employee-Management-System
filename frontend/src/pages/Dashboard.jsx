import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card p-4">

          <h2>Welcome, {name}</h2>

          <h4 className="text-primary">
            Role : {role}
          </h4>

          <hr />

          <h5>Quick Actions</h5>

          <div className="mt-3">

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

        </div>

      </div>

    </>
  );
}

export default Dashboard;