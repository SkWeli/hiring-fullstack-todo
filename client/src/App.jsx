import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { TodoProvider, useTodoContext } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'
import Spinner from './components/Spinner'
import ErrorBanner from './components/ErrorBanner'
import './App.css'

const TodoApp = () => {
  const { todos, loading, error, fetchTodos, addTodo, editTodo, toggleTodo, deleteTodo } =
    useTodoContext()
  const [filter, setFilter] = useState('all')

  if (loading) return <Spinner />

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">My Todos</h1>
        <p className="app-subtitle">Stay on top of your tasks</p>
      </header>

      <main className="app-main">
        <TodoForm onSubmit={addTodo} />

        {error && (
          <ErrorBanner message={error} onRetry={fetchTodos} />
        )}

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          todos={todos}
        />

        <TodoList
          todos={todos}
          filter={filter}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />
      </main>
    </div>
  )
}

const App = () => {
  return (
    <TodoProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '8px',
            fontSize: '14px',
          },
        }}
      />
      <TodoApp />
    </TodoProvider>
  )
}

export default App