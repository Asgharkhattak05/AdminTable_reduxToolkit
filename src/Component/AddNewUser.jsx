import React from "react";
import fakeApiData from "../apiData/Index";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";

const AddNewUser = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    dispatch(addUser(payload));
    // console.log(payload);
  };
  return (
    <>
      <button
        onClick={() => {
          addNewUser(fakeApiData());
        }}
      >
        Add New User
      </button>
    </>
  );
};

export default AddNewUser;
