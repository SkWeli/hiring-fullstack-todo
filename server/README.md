# Todo App - Server

Express REST API for the full-stack Todo application, backed by MongoDB.

## Tech Stack

- Node.js
- Express 4
- Mongoose
- express-validator
- dotenv

## Setup

```bash
# From the repo root
npm install

# Or from this directory
cd server && npm install
```

## Environment Variables

```bash
cp .env.example .env
```

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port the server listens on | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/todo-app` |

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/todo-app
```

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start with nodemon (auto-restart on file change) |
| `npm start` | Start with node (production) |

## API Reference

Base URL: `http://localhost:5000/api`

### Get all todos

GET /todos
Response `200`:
```json
[
  {
    "_id": "665f1a2b3c4d5e6f7a8b9c0d",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "done": false,
    "createdAt": "2024-06-04T10:00:00.000Z",
    "updatedAt": "2024-06-04T10:00:00.000Z"
  }
]
```

### Create a todo
POST /todos
Body:
```json
{ "title": "Buy groceries", "description": "Optional" }
```
Response `201`: Created todo object.

### Update a todo
PUT /todos/:id
Body:
```json
{ "title": "Updated title", "description": "Updated description" }
```
Response `200`: Updated todo object.

### Toggle done status
PATCH /todos/:id/done
Response `200`: Updated todo object with flipped `done` value.

### Delete a todo
DELETE /todos/:id
Response `204`: No content.

## Error Responses

All errors follow this shape:
```json
{
  "message": "Validation failed",
  "errors": [
    { "field": "title", "message": "Title is required" }
  ]
}
```

| Status | Cause |
|---|---|
| `400` | Validation failure or invalid ObjectId format |
| `404` | Todo not found |
| `500` | Internal server error |

## Project Structure

```
src/
├── config/
│   └── db.js               # Mongoose connect with error handling
├── controllers/
│   └── todo.controller.js  # getAll, create, update, toggleDone, remove
├── middleware/
│   ├── errorHandler.js     # Global error normaliser
│   └── validate.js         # express-validator runner
├── models/
│   └── Todo.model.js       # Mongoose schema with validation
├── routes/
│   └── todo.routes.js      # Route definitions with validation rules
├── app.js                  # Express setup, CORS, routes mount
└── server.js               # Entry point — DB connect then listen
```