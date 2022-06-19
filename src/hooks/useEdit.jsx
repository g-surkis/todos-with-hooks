import { useState, useRef } from 'react'
import { useClickAway } from 'react-use';

const TodoElement = ({ element, index, updateHandler }) => {
  const [isEditActive, setEditActive] = useState(false);
  const [todo, setTodo] = useState(element);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setEditActive(false)
  });


  const onChange = (event) => {
    const { value } = event.target;
    setTodo(value)
  }

  const onSave = () => {
    updateHandler(index, todo)
    setEditActive(false)
  }

  const onCancel = () => {
    setTodo(element)
    setEditActive(false)
  }

  const onDelete = () => {
    updateHandler(index, null, true)
    setEditActive(false)
  }

  const onEdit = () => setEditActive(true)

  return { ref, todo, isEditActive, onSave, onCancel, onChange, onEdit, onDelete }
}

export default TodoElement

