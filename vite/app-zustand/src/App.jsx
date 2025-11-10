import './App.css'
import { useCounter } from './stores/useCounter'

function App() {
  const {count, increment, decrement, reset} = useCounter();
  return (
    <>
    <div>
      <span>Counter : {count}</span>
      <button onClick={increment}>one up</button>
      <button onClick={decrement}>one down</button>
      <button onClick={reset}>reset</button>
    </div>
    </>
  )
}

export default App
