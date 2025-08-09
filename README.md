# Users API (In-Memory Storage)

A simple RESTful API built with **Node.js** and **Express** that stores user data in-memory using an array.  
Supports basic CRUD (Create, Read, Update, Delete) operations with proper HTTP status codes and error handling.

---

## 📌 Features
- Store users in memory (array)
- Create, Read, Update, and Delete users
- Proper HTTP status codes:
  - `200 OK` – Successful GET, PUT, DELETE
  - `201 Created` – Successful POST
  - `404 Not Found` – User does not exist
  - `400 Bad Request` – Invalid input
- Error handling with clear messages

---

## 📂 Project Structure

users-api/
│ index.js
│ package.json
│ .env
└───src/
├── controllers/
│ userController.js
└── routes/
userRoutes.js


---

## ⚙️ Installation & Setup
1. **Clone or download** the project.
2. Open terminal in project folder and install dependencies:
   ```bash
   npm install


