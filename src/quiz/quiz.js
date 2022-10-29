import './quiz.css';
import React, { useState } from 'react';

let t = []//to store all the user answers 
let userAnswer = 0 // initializing the variable to use it after
let counter = 0;
let n = false
let color = ""
let m = ""

function Quiz() {
    const [n1, setN1] = useState(Math.ceil(Math.random() * 9))//generating randomly the nbrs of the operations
    const [n2, setN2] = useState(Math.ceil(Math.random() * 9))
    const [score, setScore] = useState(0)

    let answer = (e) => {//get the user answer
        userAnswer = e.target.value
    }
    let valider = () => {//check if his answer is correct or not 

        counter++
        if (counter === 10) {// we need it to stop the quiz
            n = "true"
        }

        let rightAnswer = n1 * n2;

        if (rightAnswer !== parseInt(userAnswer)) {
            color = "red"
            m = "Wrong"

        } else {
            color = "green"
            setScore(score + 1)
            m = "Right"
        }

        t.push({ op: n1 + "*" + n2, r: rightAnswer, ua: parseInt(userAnswer), cl: color, ev: m })
        console.log(t)
        setN1(Math.ceil(Math.random() * 9))//change and render them 
        setN2(Math.ceil(Math.random() * 9))

    }
    return (<div className="all">
        <div className='operation'>
            <p>{n1}*{n2}</p>
        </div>
        <p>Answer :<input type="text" onChange={answer} /></p>
        <button onClick={valider} disabled={n}>valider</button>
        <div className='results'>
            {
                t.map((e, i) => {// render all the answers of the user RA : right answer / YA your answer
                    return (<p className="resu" key={i} style={{ color: e.cl }}>{e.op} | RA:{e.r} |YA :{e.ua} | {e.ev}</p>)
                })
            }
        </div>
        <p> Score : {score}/10</p>
    </div>)
}
export default Quiz;
