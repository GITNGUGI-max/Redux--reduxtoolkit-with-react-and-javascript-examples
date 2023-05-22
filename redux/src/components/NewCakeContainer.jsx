import React, { useState } from 'react'
import { buyCake, restockCake } from '../redux'
import {connect} from 'react-redux'

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
  return (
    <div>
      <h1>Num of Cakes - {props.numOfCakes}</h1>
      <input type="number" value={number} onChange={e=>setNumber(e.target.value)} />
      <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
      <button onClick={()=>props.restockCake(number)}>Restock {number} Cake</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: number =>dispatch(buyCake(number)),
        restockCake: number=>dispatch(restockCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
