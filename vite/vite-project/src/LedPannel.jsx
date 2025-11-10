import React from 'react'

function LedPanel({ active }) {
  const leds = [
    { color: 'red', bgClass: 'bg-red-500' },
    { color: 'yellow', bgClass: 'bg-yellow-400' },
    { color: 'green', bgClass: 'bg-green-500' },
  ]

  return (
    <div className="flex gap-4 justify-center items-center">
        {leds.map((led) => (
             <div
                key={led.color}
                className={`w-10 h-10 rounded-full transition-all duration-300
                    ${led.color === active ? "scale-110 opacity-100 shadow-lg" : "opacity-40"}
                    ${led.color === "red" ? "bg-red-500" : ""}
                    ${led.color === "yellow" ? "bg-yellow-400" : ""}
                    ${led.color === "green" ? "bg-green-500" : ""}
                `}
            ></div>
        ))}
    </div>
  )
}

export default LedPanel