
// 05_ReactDropdownsAndRadioButtons : Creating DropDown component

import { useState } from "react";


const DropDownComponent = (props) => {
    const Records = props.list.map((item) => {
        return <option key={item.itemName}>{item.itemName}</option>;
        });
        return(<select>{Records}</select>);
}

const DropDownExample = () => {
    const [inputVal, setInputVal] = useState("");
    const [itemList, setItemList] = useState([{ itemName: "--Select--" }]);
  
    const clickHandler = () => {
      setInputVal("");
      const newList = [...itemList, { itemName: inputVal }];
      setItemList(newList);
    };
    return (
        <div>
          <center>
            <h3>DropDown</h3>
            <input
              type="text"
              placeholder="Enter the item..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            ></input>
            <br></br>
            <button onClick={clickHandler}>Add Item</button>
            <DropDownComponent list = {itemList}/>
          </center>
        </div>
      );
    };
    

export default DropDownExample;          