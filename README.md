# Mongoose Model Schema - Digital Bookshelf

A backend application demonstrating Mongoose models and schemas with MongoDB.

## Features

- Express.js REST API
- MongoDB with Mongoose ODM
- Model: Bookshelf
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

- `GET /api/bookShelf` - Get all books
- `GET /api/bookShelf/:id` - Get a single book by ID
- `POST /api/bookShelf` - Create a new book
- `PUT /api/bookShelf/:id` - Update a book by ID
- `DELETE /api/bookShelf/:id` - Delete a book by ID

#### Book Schema:
```json
{
   "title": "string",
  "author": "String",
  "isbn": "string",
  "publishedDate": "string time",
  "inStock": true
}
```

## Project Structure

```
Mongoose_ModelSchema/
├── models/
│   └── Book.js        # Books model with schema
├── db/
│   └── connection.js  # MongoDB connection
├── routes/
│   └── bookRoutes.js  # Book API routes
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── server.js          # Main application entry point
├── package.json       # Dependencies and scripts
└── README.md          # This file
```
