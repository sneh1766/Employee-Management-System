import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

    return (

        <nav className="navbar navbar-dark bg-dark px-4">

            <Link className="navbar-brand" to="/dashboard">
                Employee Management
            </Link>

            <div>

                {(role==="Admin" || role==="Manager") && (

                    <Link className="btn btn-light me-2" to="/employees">
                        Employees
                    </Link>

                )}

                <Link className="btn btn-light me-2" to="/profile">
                    Profile
                </Link>

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;