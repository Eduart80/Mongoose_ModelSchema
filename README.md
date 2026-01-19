# Mongoose Model Schema - Simple MERN Backend

A backend application demonstrating Mongoose models and schemas with MongoDB.

## Features

- Express.js REST API
- MongoDB with Mongoose ODM
- Two models: User and Product
- Full CRUD operations for both models
- Schema validation
- Timestamps (createdAt, updatedAt)

## Running the Application

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID

#### User Schema:
```json
{
  "name": "string",
  "email": "string",
  "age": "number",
  "isActive": "boolean",
  "role": "string"
}
```

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product by ID
- `DELETE /api/products/:id` - Delete a product by ID

#### Product Schema:
```json
{
  "name": "string ",
  "description": "string",
  "price": "number",
  "category": "string",
  "inStock": "boolean",
  "quantity": "number",
  "tags": "array of strings"
}
```

## Project Structure

```
Mongoose_ModelSchema/
├── models/
│   ├── User.js           # User model with schema
│   └── Product.js        # Product model with schema
├── routes/
│   ├── userRoutes.js     # User API routes
│   └── productRoutes.js  # Product API routes
├── .env                  # Environment variables
├── .gitignore           # Git ignore file
├── server.js            # Main application entry point
├── package.json         # Dependencies and scripts
└── README.md            # This file
```
