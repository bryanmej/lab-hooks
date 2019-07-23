import React from 'react'

export default function Counter({increment, decrement, counter}) {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  )
}
