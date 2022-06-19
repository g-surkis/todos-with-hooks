import React, { useRef } from 'react'
import { useClickAway } from 'react-use';

const useCreate = ( onCreate ) => {
  const [title, setTitle] = React.useState('');
  const [isVisible, setVisible] = React.useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setVisible(false)
  });

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setTitle(value)
  }

  const onCreateHandler = () => {
    onCreate(title)
    setTitle('')
  }

  
  return {ref, title, isVisible, onChangeHandler, onCreateHandler, setVisible }
}

export default useCreate
