import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/slices/userSlice';

const DeleteAllUser = () => {
    const dispatch  = useDispatch();
    const deleteUser = ()=> {
       dispatch(deleteUsers())
    }
  return (
    <div>
        <button onClick={deleteUser}>
        DeleteAllUser
        </button>
        </div>
  )
}

export default DeleteAllUser