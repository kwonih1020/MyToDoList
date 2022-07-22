
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// counter 만들기 예시
function App() {
  const [number, setNumber] = useState(0);

  const onClickPlus = () => {
    setNumber(number + 1)
  }

  const onClickMinus = () => {
    setNumber(number - 1)
  }
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickMinus}>-1</button>
    </div>
  )
}


// function App() {
//   // const [name, setName] = useState("길동이");
//   const [value, setValue] = useState("");

//   // const onClickHandler = () => {
//   //   setName("누렁이");
//   // }

//   const onChangeHandler = (event) => {
//     const inputValue = event.target.value;
//     setValue(inputValue);
//   }

//   console.log(value)

//   return (
//     <div>
//       {/* {name} */}
//       {/* <button onClick={onClickHandler}>버튼</button> */}
//       <input type="text" onChange={onChangeHandler} value={value} />
//     </div>
//   ) 
// }



// function Child(props) {
//   return (
//     <div>
//       {props.grandName}
//       <button onClick={() => {
//       props.setName("smallPa")
//     }}></button>
//     </div>
//   )
// }

// function Mom(props) {
//   return (
//     <div>
//      <Child grandName={props.grandName} setName={props.setName} />
//     </div>
//   )
// }


// function Grandpa() {
//   const [ name, setName ] = useState("Bigpa");
//   return <Mom  grandName={name} setName={setName} />
// }


// function App() {
//   return (
//     <div>
//       <Grandpa />
//     </div>
//   )
// }



// function App() {
//   const [dogs, setDogs] = useState(["말티즈"]);

//   function onClickHandler() {
// 		// spread operator(전개 연산자)를 이용해서 dogs를 복사합니다. 
// 	  // 그리고 나서 항목을 추가합니다.
//     setDogs([...dogs, "시고르자브르종"]);
//   }

//   console.log(dogs);
//   return (
//     <div>
//       <button onClick={onClickHandler}>버튼</button>
//     </div>
//   );
// }

export default App;
