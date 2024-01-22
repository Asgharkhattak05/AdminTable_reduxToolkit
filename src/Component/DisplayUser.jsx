import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    // console.log(state.users);
    return state.users;
  });

  const deletesingleUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      {data &&
        data.map((curData, index) => {
          return (
            <div className="mapData" key={index}>
              <li className="ulmarginbtm">{curData}</li>
              <div className="delIcon">
                <span>
                  <MdDeleteForever
                    onClick={() => deletesingleUser(index)}
                    className="icon"
                  />
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DisplayUser;
