import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {

  const [user, setUser] = useState({});

  useEffect(() => {

    API.get("/employees/profile/me")
      .then((res) => setUser(res.data))
      .catch(() => alert("Error"));

  }, []);

  return (
<>
    <div className="container mt-5">

      <h2>My Profile</h2>

      <table className="table">

        <tbody>

          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>

          <tr>
            <th>Role</th>
            <td>{user.role}</td>
          </tr>

        </tbody>

      </table>

    </div>
</>
  );

}

export default Profile;