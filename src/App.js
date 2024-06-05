// import ProductsList from './components/01_React-Lists-Keys/React-Lists';
// import ObjectExample from './components/02_ReactSets-and-Objects/ObjectExample';
// import MapExample from './components/03_ReactMaps/Maps';
// import AddDeleteExample from './components/03_ReactMaps/AddDeleteExample';
import Table from './components/04_ReactTables/Table-Library';
// import TableMain from './components/04_ReactTables/Table';
// import DropDownExample from './components/05_ReactDropDowns-And-RadioButtons/DropDown';
// import RadioButton from './components/05_ReactDropDowns-And-RadioButtons/RadioButton';
// import SetExample from './components/02_ReactSets-and-Objects/SetExample';

// Common code for various components in the components folder
// Please uncomment the code which you want to execute
// function App() {
//   return (
//     <div className="App">
//       {/* <ProductsList /> */}
//       {/* <ObjectExample/> */}
//       {/* <MapExample />  */}
//       {/* <AddDeleteExample/> */}
//       {/* <Table/> */}
//       {/* <TableMain/> */}
//       {/* <SetExample /> */}
//       {/* <DropDownExample/> */}
//     </div>
//   );
// }

// Code for 03_ReactMaps 
// function App() {
//   const arr = [1, 2, 3, 4, 5];
//   return (
//     <div>
//       {arr.map((ele) => (
//         <span> {ele} </span>
//       ))}
//     </div>
//   );
// }

// Code Example for 05_ReactRadioButton
// function App(){
//   const radioItems = [
//     'MongoDB',
//     'ExpressJS',
//     'ReactJS',
//     'NodeJS',
//   ];
//   return(
//     <RadioButton radioItems = { radioItems }/>
//   )
// }

// Code Example for 04_ReactTable
function App() {
  const data = [
    {
      studName: 'John', studAge: 30, studGender: 'Male',
    },
    {
      studName: 'Jane', studAge: 25, studGender: 'Female',
    },
    {
      studName: 'Bob', studAge: 45, studGender: 'Male',
    },
  ];
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

// Code Example for 1_React Ref within class component
// import MyComponent from './components/06_React Refs and Fragments/1_React Ref within class component/MyComponent';    
// function App() {
//   return(
//     <div>
//       <MyComponent/>
//     </div>
//   );
// }


// Code Example for 2_React Ref within functional component
// import TextInput from './components/06_React Refs and Fragments/2_React Ref within functional component/TextInput';
// function App(){
//   return(
//     <div>
//       <TextInput/>
//     </div>
//   );
// }


// Code Example for 3_React Fragment example
// import MyList from './components/06_React Refs and Fragments/3_React Fragment example/MyList';
// function App(){
//   const items = [
//     { id: 1, name: 'pencil' },
//     { id: 2, name: 'book' },
//     { id: 3, name: 'eraser' }
//   ];
//   return(
//     <>
//     <MyList items={items}/>
//     </>
//   );
// }

// Code Example for 1_Transition Component Example
// import { useState } from 'react';
// import Fade from './components/07_Animation in React/1_Transition Component Example/Fade';
// function App() {
//   const [visible, setVisible] = useState(false);

//   const handleClick = () => {
//     setVisible(prevVisible => !prevVisible);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>
//         {visible ? 'Hide' : 'Show'}
//       </button>
//       <Fade in={visible} />
//     </div>
//   );
// }

// Code Example for 2_CSSTransition Component Example
// import { useState } from 'react';
// import Fade from './components/07_Animation in React/2_CSSTransition Component Example/Fade';
// function App() {
//   const [visible, setVisible] = useState(false);

//   const handleClick = () => {
//     setVisible(prevVisible => !prevVisible);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>
//         {visible ? 'Hide' : 'Show'}
//       </button>
//       <Fade in={visible} />
//     </div>
//   );
// }

// Code Example for 3_TransitionGroupComponent Example
// import List from './components/07_Animation in React/3_TransitionGroup Component Example/List';
// import { useState } from 'react';
// function App() {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

//   const addItem = () => {
//     setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
//   };
//   const removeItem = () => {
//     setItems(prevItems => prevItems.slice(0, prevItems.length - 1));
//   };

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       <button onClick={removeItem}>Remove Item</button>
//       <List items={items} />
//     </div>
//   );
// }

// Code Example for 4_SwitchTransition Component Example
// import { useState } from 'react';
// import ViewA from './components/07_Animation in React/4_SwitchTransition Component Example/ViewA';
// import ViewB from './components/07_Animation in React/4_SwitchTransition Component Example/ViewB';
// import { SwitchTransition } from 'react-transition-group';
// function App() {
//   const [view, setView] = useState('b');

//   const switchView = () => {
//     setView(prevView =>(prevView == 'a' ? 'b' : 'a'));
//   };
//    return (
//     <div>
//       <button onClick={switchView}>Switch View</button>
//       <SwitchTransition>
//         {view == 'a' ? <ViewA /> : <ViewB />}
//       </SwitchTransition>
//     </div>
//   );
// }

export default App;
