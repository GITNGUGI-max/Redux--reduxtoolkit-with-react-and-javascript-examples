import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useSelector(state=>state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of Icecreams - {numOfIcecreams}</h1>
      <button onClick={()=> dispatch(ordered()) }>Order Icecream </button>
      <input type="number" value={value} onChange={e=>setValue(parseInt(e.target.value) ) }/>
      <button onClick={()=> dispatch(restocked(value)) }>Restock Icecream</button>
    </div>
  )
}

export default IcecreamView
