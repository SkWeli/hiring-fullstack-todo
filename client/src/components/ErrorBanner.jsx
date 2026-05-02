const ErrorBanner = ({ message, onRetry }) => {
  return (
    <div className="error-banner">
      <span>{message}</span>
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorBanner