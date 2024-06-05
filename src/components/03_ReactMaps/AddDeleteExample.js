import { useState } from "react";

const AddDeleteExample = () => {
    const initialList = [
      {
        id: 1,
        name: "Robin",
      },
      {
        id: 2,
        name: "Dave",
      },
    ];
    const [input, setInput] = useState("");
    const [list, setList] = useState(initialList);
  
    function handleChange(e) {
      setInput(e.target.value);
    }
  
    function handleAdd(str) {
      const length = list.length
      const lastId = list[length -1 ].id + 1;
      const obj = { id: lastId, name: str };
      console.log(obj);
      const newList = [...list, obj];
      setInput("");
      setList(newList);
    }
  
    function handleRemove(name) {
      const newList = list.filter((item) => item.name !== name);
      setInput("");
      setList(newList);
    }
    return (
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>&nbsp;
            </li>
          ))}
        </ul>
        <input value={input} onChange={handleChange}></input>
        <button onClick={() => handleAdd(input)}>Add</button>
        <button onClick={() => handleRemove(input)}>Delete</button>
      </div>
    );
  };
  
  export default AddDeleteExample;