import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../Api";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import Header from "./Header";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import "./UserDetails.css";


const UserDetails = () => {
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.users);
  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  console.log(fetchData);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      <div className="content">
        <Header />
        <div className="admin-table ">
          <Alert variant="warning" className="admin-subtitle my-3 ">List of all Users</Alert>
          <Button
            className="btn-add-btn"
            variant="outline-dark"
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New Users
          </Button>
        </div>

        {fetchData.map((data, id) => {
          return (
            <>
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action onClick={() => deleteUser(id)}
                variant="info">
                  {data}
                </ListGroup.Item>
              </ListGroup>
            </>
          );
        })}

        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};

export default UserDetails;
