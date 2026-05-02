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
        <p className="app-eyebrow">Task management</p>
        <h1 className="app-title">My <strong>Todos</strong></h1>
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
            background: '#0E0E0C',
            color: '#F7F6F2',
            borderRadius: '6px',
            fontSize: '13px',
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontWeight: '400',
            padding: '10px 14px',
          },
        }}
      />
      <TodoApp />
    </TodoProvider>
  )
}

export default App