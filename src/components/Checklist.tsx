import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Todo } from "../actions";
import { StoreState } from "../reducers";
import { useActions } from "../hooks/useActions";

const Checklist = () => {
  const [fetching, setFetching] = useState(false);
  const { fetchTodos, deleteTodo } = useActions();
  const todos = useSelector((state: StoreState): Todo[] => state.todos);

  useEffect(() => {
    if (todos?.length > 0) {
      setFetching(false);
    }
  }, [todos]);

  const onButtonClick = (): void => {
    setFetching(true);
    fetchTodos();
  };

  const onTodoClick = (id: number): void => {
    deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  return (
    <>
      <button onClick={onButtonClick}>Fetch</button>
      {fetching ? "LOADING" : null}
      {renderList()}
    </>
  );
};

export default Checklist;
