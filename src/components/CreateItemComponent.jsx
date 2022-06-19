import React from 'react'
import useCreate from '../hooks/useCreate';

const CreateItemComponent = ({ onCreate, isList }) => {
  const {ref, title, isVisible, onChangeHandler, onCreateHandler, setVisible } = useCreate(onCreate, isList)

  if (!isVisible) return (<div className='create-item'>
    {isList ? 'Create list' : ''}
    {' '}
    <div className='btn-plus' onClick={() => setVisible(prev => !prev)}>
      +
    </div>
  </div>)

  return (
    <div className='create-item' ref={ref}>
      <input onChange={onChangeHandler} value={title} />
      <button onClick={onCreateHandler}>Create</button>
    </div>
  )
}

export default CreateItemComponent
