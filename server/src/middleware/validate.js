const { validationResult } = require('express-validator')

const validate = (rules) => {
  return async (req, res, next) => {
    await Promise.all(rules.map((rule) => rule.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) return next()

    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    })
  }
}

module.exports = validate