
import './App.css';
import React, { useState } from 'react';
// function App() {
//   const [date, setDate] = useState(new Date());

//   let change = () => {
//     setDate(new Date())
//   };



//   return (<div className="all">
//     <p>  the time is :{date.getHours()} :{date.getMinutes()} :{date.getSeconds()}   </p>
//     <br />
//     <button onClick={change} > click here</button>
//   </div>)





// }
function App() {

  let co = ['red', 'green', 'blue'];

  const [colo, setColor] = useState('red');
  const [colo2, setColor2] = useState('green');
  const [colo3, setColor3] = useState('blue');
  let changeOrder = () => {
    setColor(co[Math.floor(Math.random() * 3)])
    setColor2(co[Math.floor(Math.random() * 3)])
    setColor3(co[Math.floor(Math.random() * 3)])

  }


  return (<div className="all">

          <div className="sp" style={{ backgroundColor: colo }}></div>
          <div className="sp" style={{ backgroundColor: colo2}}></div>
          <div className="sp" style={{ backgroundColor: colo3 }}></div>



    <button onClick={changeOrder}>click</button>
  </div>)





}
export default App;
