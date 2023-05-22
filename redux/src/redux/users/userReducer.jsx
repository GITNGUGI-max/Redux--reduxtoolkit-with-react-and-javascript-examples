import { fetchUserRequest, fetchUserSuccess, fetchUserFail } from "./userActions";
import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";


const initialState = {
    loading:false,
    users:[],
    error:''
}

const userReducer = (state = initialState, action )=>{

    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }

        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USER_FAIL:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default: return state
    }   

}


export default userReducer