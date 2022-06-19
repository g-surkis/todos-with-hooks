import { useState, useEffect } from "react";
import apiClient from "../utils/apiClient"

import TodoListHttpRepository from "../utils/TodoListHttpRepository"
const todoListRepo = new TodoListHttpRepository(apiClient);

const useLists = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createListHandler = (title) => {
    if (title.length < 4) return;
    const list = { title, todos: [] }
    setLists(prev=>[...prev, list])
  }

  const getLists = () => {
    setLoading(true);
    todoListRepo
      .getLists()
      .then(setLists)
      .catch(setError)
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getLists();
  }, []);

  return { data: lists, error, loading, createListHandler };
};


export default useLists