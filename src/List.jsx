import React from "react";
import Status from "./Notify";

const task = ({ user, handleToDoDelete, handleEdit, handleStatusChange }) => {
  const handleEditClick = (e) => {
    e.preventDefault();
    handleEdit();
  };

  return (
    <div className="col-xl-4 col-md-6 col-sm-6 px-5 px-sm-1 px-lg-4 py-3">
      <div
        className="card p-3"
        style={{ backgroundColor: "#ccf5d3", border: "0", textAlign: "left" }}
      >
        <div>Title : {user.name}</div>
        <div>Description : {user.desc}</div>
        <div>
          Status :
          <Status handleStatusChange={handleStatusChange} user={user} />
        </div>
        <div className="text-end mt-4">
          <button
            className="btn btn-primary btn-light-green me-4 px-4"
            onClick={handleEditClick}
            style={{
              backgroundColor: "#13ad89",
              color: "white",
              border: "0",
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-delete px-3"
            onClick={handleToDoDelete}
            style={{
              backgroundColor: "#cf5f1d",
              color: "white",
              border: "0",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default task;
