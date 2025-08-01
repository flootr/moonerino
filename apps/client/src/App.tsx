import { useState } from "react";
import "./App.css";
import { sum } from "@flootr/math";

function App() {
  const [count, setCount] = useState(0);

  const numbers = Array.from({ length: count }).map((_, i) => i + 1);
  const total = sum(...numbers);

  return (
    <>
      <div>{total}</div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
