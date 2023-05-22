import {createStore, applyMiddleware} from 'redux'
import cakeReducer from './redux/cake/cakeReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import icecreamReducer from './redux/icecream/icecreamReducer'
import userReducer from './redux/users/userReducer'

const rootReducers = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    users:userReducer
})
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)) )

export default store 