import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTodos, deleteTodo, Todo } from "../actions";

export const useActions = () => {
  const dispatch = useDispatch();

  const actionCreators = {
    fetchTodos,
    deleteTodo,
  };
  return bindActionCreators(actionCreators, dispatch);
};
