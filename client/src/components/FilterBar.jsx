const FILTERS = [
  { key: 'all',    label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'done',   label: 'Done' },
]

const FilterBar = ({ filter, setFilter, todos }) => {
  const counts = {
    all:    todos.length,
    active: todos.filter((t) => !t.done).length,
    done:   todos.filter((t) => t.done).length,
  }

  return (
    <div className="filter-bar">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-btn ${filter === key ? 'active' : ''}`}
          onClick={() => setFilter(key)}
        >
          {label}
          <span className="filter-count">{counts[key]}</span>
        </button>
      ))}
    </div>
  )
}

export default FilterBar