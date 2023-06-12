import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/slices/userSlice';
import Button from 'react-bootstrap/Button';

const DeleteAllUser = () => {
    const dispatch  = useDispatch();
    const deleteUser = ()=> {
       dispatch(deleteUsers())
    }
  return (
    <div  className='mb-2'>
        <Button variant='danger' size='sm' onClick={deleteUser}>
        DeleteAllUser
        </Button>
        </div>
  )
}

export default DeleteAllUser