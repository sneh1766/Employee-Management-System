# Employee Management System

## Project Description

This is a full-stack Employee Management System built using React, Node.js, Express, MongoDB, and Mongoose.

The project demonstrates:

- Authentication using JWT
- Authorization
- Role-Based Access Control (RBAC)
- CRUD Operations
- React Frontend Integration
- MongoDB with Mongoose

---

## Tech Stack

Frontend

- React
- React Router DOM
- Axios
- Bootstrap

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## Project Setup

### Clone Repository

```bash
git clone https://github.com/sneh1766/employee-management-system.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/employee_management
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|--------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /api/auth/me |

### Employees

| Method | Endpoint |
|--------|----------|
| GET | /api/employees |
| GET | /api/employees/:id |
| POST | /api/employees |
| PUT | /api/employees/:id |
| DELETE | /api/employees/:id |

### Roles

| Method | Endpoint |
|--------|----------|
| PUT | /api/users/:id/role |

---

## Features

- User Registration
- User Login
- JWT Authentication
- Role-Based Access Control
- CRUD Operations
- Employee Management
- Protected Routes
- React Frontend
- MongoDB Database

---

## Screenshots

Add screenshots here:

- Login Page
- Register Page
- Dashboard
- Employee List
- Add Employee
- Edit Employee
- Profile
- Postman API Testing
