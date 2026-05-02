# Todo App - Client

React frontend for the full-stack Todo application, built with Vite.

## Tech Stack

- React 18
- Vite
- Axios
- Framer Motion
- React Hot Toast

## Setup

```bash
# From the repo root
npm install

# Or from this directory
cd client && npm install
```

## Environment Variables

Create a `.env` file in this directory:

```env
VITE_API_BASE_URL=/api
```

The Vite dev server proxies all `/api` requests to `http://localhost:5000`
so no CORS configuration is needed in development.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server on port 5173 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── api/
│   ├── axiosClient.js     # Axios instance with base URL and error interceptor
│   └── todos.api.js       # All CRUD functions (getAll, create, update, toggleDone, remove)
├── components/
│   ├── TodoForm.jsx        # Dual-purpose create / edit form with validation
│   ├── TodoItem.jsx        # Single todo card — toggle, inline edit, two-step delete
│   ├── TodoList.jsx        # Animated list with filter logic
│   ├── FilterBar.jsx       # All / Active / Done tabs with counts
│   ├── EmptyState.jsx      # Context-aware empty message
│   ├── Spinner.jsx         # Loading indicator
│   └── ErrorBanner.jsx     # Error strip with retry action
├── context/
│   └── TodoContext.jsx     # React context wrapping useTodos hook
├── hooks/
│   └── useTodos.js         # All state, server calls, and optimistic updates
└── utils/
├── validators.js       # Client-side form validation rules
└── formatDate.js       # Relative and absolute date formatters
```