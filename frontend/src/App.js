import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route
  path="/dashboard"
  element={
   <ProtectedRoute roles={["Admin","Manager","Employee"]}>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/employees"
  element={
    <ProtectedRoute roles={["Admin","Manager"]}>
      <EmployeeList />
    </ProtectedRoute>
  }
/>

<Route
  path="/add-employee"
  element={
    <ProtectedRoute roles={["Admin","Manager"]}>
      <AddEmployee />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit/:id"
  element={
    <ProtectedRoute roles={["Admin","Manager"]}>
      <EditEmployee />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute roles={["Admin","Manager","Employee"]}>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route path="*" element={<NotFound />} />
<Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;