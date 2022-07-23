
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
    </div>
  )
}



// map() 예제

// function Square(props) {
//   const squareStyle = {
//     width: "100px",
//     height: "100px",
//     border: "1px solid green",
//     borderRadius: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };
//   return <div style={squareStyle}>{props.vegetableName}</div>;
// }

// function Square(props) {
//   const squareStyle = {
//     width: "100px",
//     height: "100px",
//     border: "1px solid green",
//     borderRadius: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   return <div style={squareStyle}>
//            <div>{props.user.age}살 - </div>
//             <div>{props.user.name}</div>
//         </div>;
// }

// function App() {
//   const style = {
//     padding: "100px",
//     display: "flex",
//     gap: "12px",
//   };

//   // const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];

//   const users = [
//     { id: 1, age: 30, name: "송중기" },
//     { id: 2, age: 24, name: "송강" },
//     { id: 3, age: 21, name: "김유정" },
//     { id: 4, age: 29, name: "구교환" },
//   ];

//   return (
//     <div style={style}>
//       {
//         users.map((user) => {
//           if (user.age < 25) {
//             return <Square key={user.id} user={user}/>
//           } else {
//             return null;
//           }
//         })
//       }
//     </div>
//   );
// }


// counter 만들기 예시

// function App() {
//   const [number, setNumber] = useState(0);

//   const onClickPlus = () => {
//     setNumber(number + 1)
//   }

//   const onClickMinus = () => {
//     setNumber(number - 1)
//   }
  
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onClickPlus}>+1</button>
//       <button onClick={onClickMinus}>-1</button>
//     </div>
//   )
// }


// onChange

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


// 부모~자식 컨포넌트

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
