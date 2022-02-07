import { useState } from "react";
import styles from "./Todo.module.css";
import { TodoInput } from "./TodoInput";
export const TodoList = ({ id, todo, handleDelete, onUpdate }) => {
  const [isStricked, setIsStriked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onAdd = (newAdd) => {
    onUpdate({
      ...newAdd,
      id: todo.id
    });
    setIsEdit(false);
  };
  return (
    <div>
      <li className={styles.todoItem}>
        {isEdit ? (
          <TodoInput onAdd={onAdd} key={todo.id} />
        ) : (
          <>
            <input
              value={isChecked}
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
                setIsStriked(!isStricked);
              }}
            />
            <span className={isStricked ? styles.strike : styles.normal}>
              {todo.value}
            </span>
          </>
        )}
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          {isEdit ? "Cancel Edit" : "Edit"}
        </button>
      </li>
    </div>
  );
};
