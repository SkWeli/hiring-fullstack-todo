const EmptyState = ({ filter }) => {
  const content = {
    all: {
      emoji: '📋',
      title: 'No todos yet',
      subtitle: 'Add your first todo above to get started',
    },
    active: {
      emoji: '🎉',
      title: 'Nothing left to do',
      subtitle: 'All your todos are done',
    },
    done: {
      emoji: '⏳',
      title: 'Nothing completed yet',
      subtitle: 'Complete a todo and it will show up here',
    },
  }

  const { emoji, title, subtitle } = content[filter] || content.all

  return (
    <div className="empty-state">
      <span className="empty-emoji">{emoji}</span>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-subtitle">{subtitle}</p>
    </div>
  )
}

export default EmptyState