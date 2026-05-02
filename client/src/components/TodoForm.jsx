import { useState, useEffect } from 'react'
import { validateTodoForm } from '../utils/validators'

const TodoForm = ({ onSubmit, initialValues = null, onCancel }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || '')
      setDescription(initialValues.description || '')
    }
  }, [initialValues])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { isValid, errors: validationErrors } = validateTodoForm({ title, description })
    if (!isValid) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    await onSubmit({ title: title.trim(), description: description.trim() })
    setSubmitting(false)

    if (!initialValues) {
      setTitle('')
      setDescription('')
    }
    setErrors({})
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && onCancel) onCancel()
  }

  const isEditing = Boolean(initialValues)

  return (
    <form className="todo-form" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div className="form-group">
        <input
          type="text"
          className={`form-input ${errors.title ? 'input-error' : ''}`}
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (errors.title) setErrors((prev) => ({ ...prev, title: null }))
          }}
          autoFocus
          maxLength={200}
        />
        {errors.title && (
          <span className="field-error">{errors.title}</span>
        )}
      </div>

      <div className="form-group">
        <textarea
          className={`form-textarea ${errors.description ? 'input-error' : ''}`}
          placeholder="Add a description (optional)"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
            if (errors.description) setErrors((prev) => ({ ...prev, description: null }))
          }}
          rows={3}
          maxLength={1000}
        />
        {errors.description && (
          <span className="field-error">{errors.description}</span>
        )}
      </div>

      <div className="form-actions">
        {onCancel && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting}
        >
          {submitting ? 'Saving...' : isEditing ? 'Save changes' : 'Add todo'}
        </button>
      </div>
    </form>
  )
}

export default TodoForm