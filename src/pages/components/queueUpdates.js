import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  // arrow function here queues the functions instead of setting it
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
