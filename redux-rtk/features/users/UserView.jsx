import React, {useEffect} from 'react'
import {fetchUsers} from './userSlice'
import {useSelector, useDispatch} from 'react-redux'

const UserView = () => {

    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)

    useEffect(()=>{
       dispatch(fetchUsers())
    }, [])
  return (
    <div>
      <h1>List of Users</h1>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>{user.error}</div>:null}
      {!user.loading && user.users.length ? (
        <ul>
            {user.users.map(user=>(
              <li key={user.id}>  {user.name}</li>
            ) 
            )}
        </ul>
      ) : null}
    </div>
  )
}

export default UserView
