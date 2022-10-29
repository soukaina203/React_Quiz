

import './compo1.css';
import React, { useState } from 'react';
let table = [
{ ref: "n1", libe: "champo", pu: 1500 },
{ ref: "n2", libe: "pc", pu: 1500 },
{ ref: "n3", libe: "laptob", pu: 9500 },
{ ref: "n4", libe: "table", pu: 7500 },
{ ref: "n5", libe: "desk", pu: 8500 },
{ ref: "n6", libe: "pen", pu: 5500 }

]
let i = 0
let t = []
function Table() {
  const [prod, setProd] = useState([])
  const [sumi,setSum]=useState('')
  let add = () => {
    if (i < table.length) {
      t.push(table[i])
      setProd([...t])//quand on passe t il le considere comme le meme objet sans voir le ontenu de t la solution cc'est les ... points de propagation
      // qui creer un nouveau copie de t
      i++
    }
  }
  let sum=()=>{
    let s=0;
    for (let i = 0; i < t.length; i++) {
      s+=parseInt(t[i].pu)
     
    }
setSum(s)
  }

  return (
    <div className='all'>
      <button onClick={add} className="fn">Add a Product</button>
      <button onClick={sum} className="rn">Calcul of the sum</button>
      <p > the sum of all pruducts price is :{sumi}</p>
      <table>
        <tr>
          <th>Ref</th>
          <th>Libelle</th>
          <th>Pu</th>
        </tr>
        <tbody>
          {t.map((e, i) => {
            return <tr key={"r" + i}>
              <td key={i + "s"}>{prod[i].ref}</td>
              <td key={i + "n"}>{prod[i].libe} </td>
              <td key={i + "d"}>{prod[i].pu} </td>
            </tr>
          })}

        </tbody>
      </table>
    </div>
  )





}
export default Table;
