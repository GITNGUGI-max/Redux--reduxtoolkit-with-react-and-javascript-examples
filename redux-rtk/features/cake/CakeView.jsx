import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
    const [value, setValue] = useState(1)
    const numOfCakes = useSelector(state=> state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of Cakes - {numOfCakes} </h1>
      <button onClick={()=> dispatch(ordered())}>Order Cake </button>
      <input type="number" value={value} onChange={e=>setValue(parseInt(e.target.value) ) }/>
      <button onClick={()=>dispatch(restocked(value))}>Restock Cake</button>
    </div>
  )
}

export default CakeView
