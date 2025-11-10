import React, { useReducer } from 'react'
import LedPanel from './LedPannel'

const initialState = "red"

function reducer(state, action) {
  switch (action.type) {
    case "prev":
      if (state === "red") return "green";
      if (state === "green") return "yellow";
      if (state === "yellow") return "red";
      break
    case "reset":
      return "red";
    case "next":
      if (state === "red") return "yellow";
      if (state === "yellow") return "green";
      if (state === "green") return "red";
      break
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        <LedPanel active={state} />

        <div className="flex gap-4 justify-center">
          <button onClick={() => dispatch({ type: "prev" })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            PREV
          </button>
          <button onClick={() => dispatch({ type: "reset" })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            RESET
          </button>
          <button onClick={() => dispatch({ type: "next" })}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default App