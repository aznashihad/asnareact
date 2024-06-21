import { createContext, useState } from "react";
import todoReducer from "./todoReducer";
import { useReducer } from "react";
import { initialState } from "./initialState";

const TodoContext = createContext({});
//context

export const TodoDataprovider = ({ children }) => {
  //const [todos, setTodos] = useState([]);
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos, dispatchTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
