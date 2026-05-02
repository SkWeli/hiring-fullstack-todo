const express = require('express')
const { body } = require('express-validator')
const { getAll, create, update, toggleDone, remove } = require('../controllers/todo.controller')
const validate = require('../middleware/validate')

const router = express.Router()

const titleRule = validate([
  body('title')
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
])

const descriptionRule = validate([
  body('description')
    .optional()
    .isLength({ max: 1000 }).withMessage('Description cannot exceed 1000 characters'),
])

router.get('/', getAll)
router.post('/', titleRule, descriptionRule, create)
router.put('/:id', titleRule, descriptionRule, update)
router.patch('/:id/done', toggleDone)
router.delete('/:id', remove)

module.exports = router