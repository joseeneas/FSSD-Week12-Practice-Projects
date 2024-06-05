
// 05_ReactDropdownsAndRadioButtons : Creating RadioButton component
import { useState } from "react";
function RadioButton(props) {
    const [radioValue, setRadioValue] = useState("");
    const [...options] = props.radioItems;
    return (
         <div>
           {options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name="dynamic-radio"
                value={option}
                checked={radioValue === option}
                onChange={(e) => setRadioValue(e.target.value)}
              />
            
            <label >{option}</label>
            </div>
          ))}
       </div>
    );
  }
 
  export default RadioButton;
