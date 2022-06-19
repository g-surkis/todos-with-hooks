import React from 'react'
import useEdit from '../hooks/useEdit';

const TodoElement = ({ element, index, updateHandler, render }) => {

  const { ref, todo, isEditActive, onSave, onCancel, onChange, onEdit, onDelete } = useEdit(
    { element, index, updateHandler })
  

  const renderElement = render ? render(todo) : todo;
  const content = (<>
    {isEditActive ? <span ref={ref}>
      <input value={todo} onChange={onChange}></input>
      <img className='icon icon-2' src="/cancel.svg" alt="cancel" onClick={onCancel} ></img>
      <img className='icon icon-2' src="/save.svg" alt="save" onClick={onSave}></img>
    </span> : renderElement}
    {!isEditActive && <>
    <img className='icon icon-edit' src="/edit.svg" alt="edit" onClick={onEdit} />
    <img className='icon icon-edit' src="/delete.svg" alt="delete" onClick={onDelete} />
    </>}
  </>)

  if (render) return (<div>{content}</div>)

  return (<li className='todo'>{content}</li>)
}

export default TodoElement

