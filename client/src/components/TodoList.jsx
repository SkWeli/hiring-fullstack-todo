import { AnimatePresence, motion } from 'framer-motion'
import TodoItem from './TodoItem'
import EmptyState from './EmptyState'

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit:   { opacity: 0, x: -20 },
}

const TodoList = ({ todos, filter, onToggle, onEdit, onDelete }) => {
  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.done
    if (filter === 'done')   return t.done
    return true
  })

  if (filtered.length === 0) {
    return <EmptyState filter={filter} />
  }

  return (
    <ul className="todo-list">
      <AnimatePresence initial={false}>
        {filtered.map((todo) => (
          <motion.li
            key={todo._id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            layout
          >
            <TodoItem
              todo={todo}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default TodoList