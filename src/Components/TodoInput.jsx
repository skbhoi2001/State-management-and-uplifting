import { useState } from "react";
import { v4 as uuid } from "uuid";
export const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            const payload = {
              value,
              id: uuid()
            };
            if (value) {
              onAdd(payload);
              setValue("");
            } else {
              alert("enterValue");
            }
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};
