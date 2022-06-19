import { useState } from "react";

import useListUpdate from "./useListUpdate"


const useTodoListComponentState = ({ list }) => {
  const [listState, setList] = useState(list);

  const { error, loading } = useListUpdate({ list: listState, setList });

  const createTodoHandler = (toDo) => {
    setList({ ...listState, todos: [...listState.todos, toDo] })
  };

  const updateHandler = (index, toDo, isDelete = false) => {
    const newTodos = [...listState.todos]

    if (isDelete) {
      newTodos.splice(index, 1);
    } else {
      newTodos[index] = toDo;
    }
    setList({ ...listState, todos: newTodos })
  }

  const updateTitleHandler = (index, title, isDelete = false) => {
    if (isDelete) {
      setList({ ...listState, isDeleted: true })
      return;
    }
    setList({ ...listState, title })
  }

  return {
    error, loading, data: listState, createTodoHandler, updateHandler, updateTitleHandler
  };
};


export default useTodoListComponentState