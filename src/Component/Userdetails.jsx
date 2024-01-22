import React from "react";
import AddNewUser from "./AddNewUser";
import DeleteUser from "./DeleteUser";
import DisplayUser from "./DisplayUser";
import { MdDeleteForever } from "react-icons/md";

const Userdetails = () => {



  return (
    <>
      <div className="admin-table">
        <div className="user-detail">
          <h3>List of the User Details</h3>
         <div className="DataIcon">
         <div className="ul">
            <ul >
              <DisplayUser />
            </ul>
          </div>
          
         </div>
        </div>
      </div>
      <hr />
      <div className="addDel">
        <div className="addNewUser">
          <AddNewUser />
        </div>
        <div className="deleteUser">
          <DeleteUser />
        </div>
      </div>
    </>
  );
};

export default Userdetails;
