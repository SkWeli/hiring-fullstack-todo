export const validateTodoForm = ({ title, description }) => {
  const errors = {}

  if (!title || !title.trim()) {
    errors.title = 'Title is required'
  } else if (title.trim().length > 200) {
    errors.title = 'Title cannot exceed 200 characters'
  }

  if (description && description.length > 1000) {
    errors.description = 'Description cannot exceed 1000 characters'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}