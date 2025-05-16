# backend_course_sell
.

🚀 Features

User registration and login (JWT-based authentication)

Admin routes to create, update, delete courses

User routes to view and purchase courses

MongoDB for database storage using Mongoose

## 📁 Folder Structure

course-selling-backend/
├── controllers/
│   ├── adminController.js
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Admin.js
│   └── Course.js
├── routes/
│   ├── admin.js
│   ├── auth.js
│   └── user.js
├── .env
├── app.js
├── package.json
└── README.md

## 🛠️ Setup Instructions

#Clone the repository

git clone https://github.com/yourusername/course-selling-backend.git
cd course-selling-backend

Install dependencies

npm install

Create a .env file

PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

Start the server

npm start

📬 API Endpoints

Auth Routes

POST /signup — Register a new user

POST /login — Login and receive JWT

Admin Routes (JWT Protected)

POST /admin/courses — Create a new course

PUT /admin/courses/:id — Update a course

GET /admin/courses — Get all courses

User Routes (JWT Protected)

GET /courses — Get all published courses

POST /courses/:id — Purchase a course

GET /purchasedCourses — Get all purchased courses

## 🧠 Tech Stack

Node.js

Express

MongoDB + Mongoose

JWT for authentication

## 📌 Notes

Admins and Users are stored in separate collections.

Passwords should be hashed (e.g., using bcrypt).

Only authenticated users can purchase/view their courses.