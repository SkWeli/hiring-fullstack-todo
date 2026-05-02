const Todo = require('../models/Todo.model')

const getAll = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
  } catch (err) {
    next(err)
  }
}

const create = async (req, res, next) => {
  try {
    const { title, description } = req.body
    const todo = await Todo.create({ title, description })
    res.status(201).json(todo)
  } catch (err) {
    next(err)
  }
}

const update = async (req, res, next) => {
  try {
    const { title, description } = req.body
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    )
    if (!todo) return res.status(404).json({ message: 'Todo not found' })
    res.json(todo)
  } catch (err) {
    next(err)
  }
}

const toggleDone = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).json({ message: 'Todo not found' })
    todo.done = !todo.done
    await todo.save()
    res.json(todo)
  } catch (err) {
    next(err)
  }
}

const remove = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    if (!todo) return res.status(404).json({ message: 'Todo not found' })
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}

module.exports = { getAll, create, update, toggleDone, remove }