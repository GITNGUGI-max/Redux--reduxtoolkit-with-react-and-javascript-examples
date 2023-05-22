import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from '../redux/icecream/icecreamActions';


const IcecreamContainer = () => {

    const numOfIcecreams = useSelector(state=> state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Num of Icecreams - {numOfIcecreams}</h1>
      <button onClick={()=>dispatch(buyIcecream())}>Buy Cake </button>
    </div>
  )
}

export default IcecreamContainer
