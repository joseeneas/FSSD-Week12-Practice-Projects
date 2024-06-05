import { useState } from 'react';

// 02_ReactSetsAndObjects deck Object Example
const ObjectExample = () => {
      const [customer, setCustomer] = useState({ name: "", phone: "" });
      const handleInputChange = (e, prop) => {
        setCustomer({
          ...customer,
          [ prop ] : e.target.value
        });
      };
    
      return (
        <>
          <label>
            Name: <input
                    value={customer.name} onChange={(e) => handleInputChange(e, "name")} />
          </label>
          <br></br>
          <label>
            Contact :
            <input value={customer.phone} onChange={(e) => handleInputChange(e, "phone")} />
          </label>
          <p>
            {customer.name} : {customer.phone}
          </p>
        </>
      ); };

export default ObjectExample;      