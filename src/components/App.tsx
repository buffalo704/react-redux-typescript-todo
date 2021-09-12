import { Provider } from "react-redux";
import "./App.css";
import { store} from "../state";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import Checklist from "./Checklist";

interface AppProps {
  todos: Todo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Checklist/>
      </div>
    </Provider>
  );
}

export default App;
