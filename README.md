# Users API (In-Memory Storage)

A simple **RESTful API** built with **Node.js** and **Express** to manage a list of users.  
This project stores users in **memory (array)** and demonstrates **routing, middleware, HTTP methods, status codes, error handling**, and **request validation**.

---

## 📌 Features
- **In-memory storage** (no database required)
- **CRUD Operations**:
  - `GET /users` → Fetch all users
  - `GET /users/:id` → Fetch user by ID
  - `POST /user` → Add a new user
  - `PUT /user/:id` → Update existing user
  - `DELETE /user/:id` → Remove user
- **Request Logging Middleware** → Logs method, URL, and status code for every request
- **Validation Middleware** → Ensures required fields (`firstName`, `lastName`, `hobby`) are present in POST & PUT requests
- **Proper HTTP Status Codes**:
  - `200 OK` → Successful GET, PUT, DELETE
  - `201 Created` → Successful POST
  - `400 Bad Request` → Validation errors
  - `404 Not Found` → User not found
- **Global Error Handling**

---

## 📂 Project Structure
users-api/
│ index.js
│ package.json
│ .gitignore
│ README.md
└── src/
├── middleware/
│ ├── logger.js
│ └── validateUser.js
├── routes/
│ └── userRoutes.js
└── controllers/
└── userController.js


---

## ⚙️ Installation & Setup
### 1. Clone the repository
```bash
git clone https://github.com/pallavi-vats/users-api.git
cd users-api
```

### 2. Install dependencies
```bash
npm install
npm install express
npm install --save-dev nodemon
```

### 3. Start the server
### Development mode (auto-restart with nodemon):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```
### 4. Server will run on:
http://localhost:5000

### 📌 API Endpoints
### 1. Get all users
Request:
```bash
GET /users
Response:

json
[
  {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Teaching"
  }
]

2. Get user by ID
Request:

bash
GET /users/1
Response:
json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Teaching"
}

3. Add new user
Request:
POST /user
Content-Type: application/json
Body:

json
{
  "firstName": "John",
  "lastName": "Doe",
  "hobby": "Coding"
}
Response:

json
{
  "id": "2",
  "firstName": "John",
  "lastName": "Doe",
  "hobby": "Coding"
}
4. Update user
Request:

PUT /user/1
Content-Type: application/json
Body:

json
{
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Traveling"
}
Response:

json
{
  "id": "1",
  "firstName": "Anshika",
  "lastName": "Agarwal",
  "hobby": "Traveling"
}
5. Delete user
Request:

DELETE /user/1
Response:

json
Copy
Edit
{
  "message": "User deleted successfully"
}
```

### 🧪 Testing
You can test the API using:

Postman

Thunder Client (VS Code extension)

curl commands in the terminal
