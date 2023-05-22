import { BUY_CAKE, RESTOCK_CAKE } from "./cakeTypes";


const initialState = {
    numOfCakes:10
}

const cakeReducer = (state = initialState, action)=>{

    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case RESTOCK_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes + Number(action.payload) 
            }
        default: return state
    }
}

export default cakeReducer