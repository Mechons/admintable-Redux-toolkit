import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../Api";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const fetchData = useSelector(state=> state.users)
  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  console.log(fetchData);

  const deleteUser = (id)=> {
dispatch(removeUser(id))
  }
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of all user</div>
          <button
            className="btn add-btn"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </button>
        </div>
        <ul>
          {fetchData.map((data,id)=> {
            return(
                <>
                      <li key={id}>{data}</li>
                <button onClick={()=>deleteUser(id)}> Delete</button>
                </>
          
            )
          })}
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default UserDetails;
