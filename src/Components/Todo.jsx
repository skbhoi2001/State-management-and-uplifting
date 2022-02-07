import { useState } from "react";
import styles from "./Todo.module.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
function Todo() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const onAdd = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const onUpdate = (update) => {
    const newTodoList = todo.map((item) => {
      if (item.id === update.id) {
        return update;
      } else {
        return item;
      }
    });
    setTodo(newTodoList);
  };
  return (
    <div>
      <TodoInput onAdd={onAdd} />
      <div>
        {todo.map((item) => {
          return (
            <TodoList
              key={item.id}
              id={item.id}
              handleDelete={(id) => handleDelete(id)}
              todo={item}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Todo;
