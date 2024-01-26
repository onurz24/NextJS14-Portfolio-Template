'use client'
import { useSelector } from "react-redux"
export default function Counter() {
  const CounterValue = useSelector((state : any) => state.Counter);
  return (
    <h1 className="text-white font-bold text-2xl">
        {CounterValue}
    </h1>
  )
}

