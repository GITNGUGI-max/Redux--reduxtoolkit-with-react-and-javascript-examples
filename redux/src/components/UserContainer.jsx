import React, { useEffect } from 'react'
import { fetchUsers } from '../redux/users/userActions'
import { connect } from 'react-redux'

const UserContainer = ({userData, fetchUsers}) => {
    console.log(userData)
    useEffect(()=>{
        fetchUsers()
    }, [])
  return userData.loading ? (
    <h1>Loading ...</h1>
  ): userData.error ?(
    <h1>{userData.error}</h1>
  ): (
    <div>
        <h1>User List</h1>
        <div>
            {userData && userData.users && userData.users.map(user=><p>{user.name}</p> )}
        </div>
    </div>
  )
}

const mapStateToProps = state=>{
    return{
        userData:state.users
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        fetchUsers:()=> dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
