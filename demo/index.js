const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combinedReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake (){
    return {
    type:BUY_CAKE,
    info:"First action "
}
}

function buyIcecream (){
    return {
    type:BUY_ICECREAM,
    info:"First action "
}
}

const initialCakeState = {
    numOfCakes:20
}

const initialIcecreamState = {
    numOfIcecreams:20
}

const cakeReducer = (state=initialCakeState, action)=>{

    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }

        default: return state
    }
}

const icecreamReducer = (state=initialIcecreamState, action)=>{

    switch(action.type){

        case BUY_ICECREAM:
            return{
                ...state,
                numOfIcecreams:state.numOfIcecreams-1
            }
        default: return state
    }
}

const rootReducer = combinedReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()