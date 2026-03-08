"use client"

import { useState } from "react"

export default function Calculator() {

  const [num1, setNum1] = useState<string>("")
  const [num2, setNum2] = useState<string>("")
  const [result, setResult] = useState<number>(0)

  const add = () => {
    setResult(Number(num1) + Number(num2))
  }

  const subtract = () => {
    setResult(Number(num1) - Number(num2))
  }

  const multiply = () => {
    setResult(Number(num1) * Number(num2))
  }

  const divide = () => {
    setResult(Number(num1) / Number(num2))
  }

  return (
    <div>
      <h2>Basic Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  )
}