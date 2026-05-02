import { useState } from 'react'
import { motion } from 'framer-motion'
import { formatRelative } from '../utils/formatDate'
import TodoForm from './TodoForm'

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleEdit = async (values) => {
    await onEdit(todo._id, values)
    setEditing(false)
  }

  const handleDelete = () => {
    if (confirmDelete) {
      onDelete(todo._id)
    } else {
      setConfirmDelete(true)
      setTimeout(() => setConfirmDelete(false), 3000)
    }
  }

  if (editing) {
    return (
      <motion.div
        layout
        className="todo-item editing"
      >
        <TodoForm
          initialValues={{ title: todo.title, description: todo.description }}
          onSubmit={handleEdit}
          onCancel={() => setEditing(false)}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      className={`todo-item ${todo.done ? 'done' : ''}`}
    >
      <div className="todo-left">
        <button
          className={`checkbox ${todo.done ? 'checked' : ''}`}
          onClick={() => onToggle(todo._id)}
          aria-label={todo.done ? 'Mark as undone' : 'Mark as done'}
        />
      </div>

      <div className="todo-body">
        <p className={`todo-title ${todo.done ? 'strikethrough' : ''}`}>
          {todo.title}
        </p>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        <span className="todo-date">{formatRelative(todo.createdAt)}</span>
      </div>

      <div className="todo-actions">
        <button
          className="action-btn edit-btn"
          onClick={() => setEditing(true)}
          aria-label="Edit todo"
          disabled={todo.done}
        >
          ✏️
        </button>
        <button
          className={`action-btn delete-btn ${confirmDelete ? 'confirming' : ''}`}
          onClick={handleDelete}
          aria-label={confirmDelete ? 'Click again to confirm delete' : 'Delete todo'}
        >
          {confirmDelete ? 'Sure?' : '🗑️'}
        </button>
      </div>
    </motion.div>
  )
}

export default TodoItem