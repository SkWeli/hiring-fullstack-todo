# Full-Stack TODO App

A simple task management application built with React, Express, and MongoDB.

## Tech Stack

- **Frontend** - React 18, Vite, Axios, Framer Motion, React Hot Toast
- **Backend** - Node.js, Express 4, Mongoose
- **Database** - MongoDB
- **Monorepo** - npm workspaces + concurrently

## Prerequisites

- Node.js v18+
- npm v9+
- MongoDB running locally on port 27017, or a MongoDB Atlas connection string

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/SkWeli/hiring-fullstack-todo.git
cd hiring-fullstack-todo

# 2. Install all dependencies (client + server) from root
npm install

# 3. Set up environment variables
cp server/.env.example server/.env
# Edit server/.env and fill in your MONGODB_URI

# 4. Start both dev servers with a single command
npm run dev
```

The React app will be at `http://localhost:5173`  
The Express API will be at `http://localhost:5000`

## Project Structure

```
hiring-fullstack-todo/
├── client/          # React frontend (Vite)
├── server/          # Express backend
└── package.json     # Workspace root
```
See [`client/README.md`](./client/README.md) and [`server/README.md`](./server/README.md) for
setup details specific to each workspace.

