const EmptyState = ({ filter }) => {
  const content = {
    all: {
      title: 'No todos yet',
      subtitle: 'Add your first todo above to get started',
    },
    active: {
      title: 'Nothing left to do',
      subtitle: 'All your todos are marked as done',
    },
    done: {
      title: 'Nothing completed yet',
      subtitle: 'Complete a todo and it will appear here',
    },
  }

  const { title, subtitle } = content[filter] || content.all

  return (
    <div className="empty-state">
      <div className="empty-rule" />
      <h3 className="empty-title">{title}</h3>
      <p className="empty-subtitle">{subtitle}</p>
    </div>
  )
}

export default EmptyState