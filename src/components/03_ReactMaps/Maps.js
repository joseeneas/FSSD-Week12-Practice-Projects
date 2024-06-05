// 03_ReactMaps Map Example
function MapExample(){
    const obj1 = {1: {firstName: "Jack", lastName: "Carter"},
                  2: {firstName: "John", lastName: "Smith"}};
  
    return (
    <div>
      {Object.entries(obj1).map(([key, value]) => <span key={key}> {key}: {value.firstName} {value.lastName} </span>) }
    </div>)
  }

export default MapExample;  
  