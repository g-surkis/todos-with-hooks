import { useState, useEffect } from "react";
import TodoListHttpRepository from "../utils/TodoListHttpRepository"
import apiClient from "../utils/apiClient"

import { useFirstMountState } from 'react-use';


const todoListRepo = new TodoListHttpRepository(apiClient);

const useListUpdate = ({ list, setList }) => {
  const isFirstMount = useFirstMountState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isFirstMount && list.isDeleted) {
      todoListRepo
        .delete(list)
        .then()
        .catch(setError)
        .finally(() => setLoading(false))
    }

    if (!isFirstMount && list && list.id && list.title && !list.isDeleted) {
      setLoading(true);
      todoListRepo
        .updateById(list)
        .then()
        .catch(setError)
        .finally(() => setLoading(false))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);


  useEffect(() => {
    if (!list.id) {
      todoListRepo
        .createList(list)
        .then(res=>setList(res.data))
        .catch(setError)
        .finally(() => setLoading(false))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])

  return { error, loading };
};

export default useListUpdate