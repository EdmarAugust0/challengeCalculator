import React, { useState } from "react"

const Calculator = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

    const handleCalculate = () => {
        const soma = parseFloat(num1) + parseFloat(num2);
        setResult(soma.toString());
    }

    return (
        <div className="container">
            <h1>*Calculator*</h1>
            <div className="inputs">
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Digite o primeiro número:"/>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Digite o segundo número:"/>
            </div>
            <div>
                {result !== null && <p>{num1} + {num2} = {result}</p>}
            </div>
                <button className="buttonResult" onClick={handleCalculate}>Result</button>
        </div>
    )
}

export default Calculator