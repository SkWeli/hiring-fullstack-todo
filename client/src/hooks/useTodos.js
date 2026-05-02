import { useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'
import * as todosApi from '../api/todos.api'

const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTodos = useCallback(async () => {
    try {
      setError(null)
      setLoading(true)
      const data = await todosApi.getAll()
      setTodos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const addTodo = async ({ title, description }) => {
    try {
      const newTodo = await todosApi.create({ title, description })
      setTodos((prev) => [newTodo, ...prev])
      toast.success('Todo created')
    } catch (err) {
      toast.error(err.message)
    }
  }

  const editTodo = async (id, { title, description }) => {
    const previous = todos
    setTodos((prev) =>
      prev.map((t) => (t._id === id ? { ...t, title, description } : t))
    )
    try {
      const updated = await todosApi.update(id, { title, description })
      setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)))
      toast.success('Todo updated')
    } catch (err) {
      setTodos(previous)
      toast.error(err.message)
    }
  }

  const toggleTodo = async (id) => {
    const previous = todos
    setTodos((prev) =>
      prev.map((t) => (t._id === id ? { ...t, done: !t.done } : t))
    )
    try {
      const updated = await todosApi.toggleDone(id)
      setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)))
    } catch (err) {
      setTodos(previous)
      toast.error(err.message)
    }
  }

  const deleteTodo = async (id) => {
    const previous = todos
    setTodos((prev) => prev.filter((t) => t._id !== id))
    try {
      await todosApi.remove(id)
      toast.success('Todo deleted')
    } catch (err) {
      setTodos(previous)
      toast.error(err.message)
    }
  }

  return {
    todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  }
}

export default useTodos