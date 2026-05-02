const errorHandler = (err, req, res, next) => {
  console.error(err.stack)

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validation failed',
      errors: Object.values(err.errors).map((e) => ({
        field: e.path,
        message: e.message,
      })),
    })
  }

  // Bad MongoDB ObjectId
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(400).json({
      message: 'Invalid todo ID format',
    })
  }

  // Fallback
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
  })
}

module.exports = errorHandler