// 01_ReactLists example1

function ListExample(){
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
  
  const listDays= days.map((day) => 
  <li> {day} </li>);
  return <ul> {listDays} </ul>
}


// 01_ReactLists example2
function ProductsList() {
  const products = [
    { id: 'P01', name: 'Water Bottle', quantity: 10},
    { id: 'P02', name: 'Lunch Box' , quantity: 15 },
    { id: 'P03', name: 'School Bag' , quantity: 12 }
  ];
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.name} : { item.quantity > 10 ? "Sufficient" : "Insufficient" }
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;