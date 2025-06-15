# 🛠️ BOM Manager API

A full-featured RESTful API built with **Node.js**, **Express**, and **PostgreSQL** to manage a Bill of Materials (BOM) system.

## 🔧 Tech Stack
- Node.js
- Express.js
- PostgreSQL
- pg (PostgreSQL client)
- dotenv
- CORS
- Postman (for API testing)

## 🚀 Features
- Full CRUD operations for parts
- Clean MVC folder structure
- PostgreSQL integration
- Environment variables for security

## 📦 API Endpoints

| Method | Route            | Description            |
|--------|------------------|------------------------|
| GET    | /parts           | Get all parts          |
| GET    | /parts/:id       | Get part by ID         |
| POST   | /parts           | Add a new part         |
| PUT    | /parts/:id       | Update a part          |
| DELETE | /parts/:id       | Delete a part          |

## 📂 Sample POST Body
```json
{
  "name": "Resistor",
  "category": "Electrical",
  "unit_cost": 0.25,
  "quantity": 500
}
