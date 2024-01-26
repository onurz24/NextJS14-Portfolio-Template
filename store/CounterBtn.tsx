'use client'
import React from 'react'
import { update } from '@/store/CounterSlice'
import { useDispatch } from 'react-redux'

interface CounterBtn_Props {
  payload: number
}
export default function CounterBtn({ payload } : CounterBtn_Props) {
  const dispatch = useDispatch();

  return (
    <div className='
    pl-4 pr-4 pt-2 pb-2
    text-lg font-bold
  bg-white text-gray-800
    cursor-pointer select-none
    rounded-md
  active:bg-gray-300
    active:scale-95
    active:transition
    active:duration-500
    '
    onClick={()=>{dispatch(update(payload))}}
    >
        {payload > 0 ? `+${payload}` : payload }
    </div>
  )
}

