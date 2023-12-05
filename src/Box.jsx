import { useState, useEffect } from "react";
import React from "react";

import List from "./List";
import Filter from "./Filter";

const Input = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  const addNewUser = () => {
    const newUser = {
      name: name,
      desc: desc,
      status: "Not Completed", // Default status when adding a new user
    };
    // console.log(newUser);

    const arr = [...user, newUser];

    setUser(arr);
    localStorage.setItem("List", JSON.stringify(arr));

    if (editIndex !== null) {
      // Edit existing user
      const updatedUsers = [...user];
      updatedUsers[editIndex] = newUser;
      setUser(updatedUsers);
      setEditIndex(null); // Exit edit mode
    } else {
      // Add new user
      const arr = [...user, newUser];
      setUser(arr);
    }

    localStorage.setItem("List", JSON.stringify(user));

    setName("");
    setDesc("");
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("List"));
    if (Array.isArray(savedTodo)) {
      setUser(savedTodo);
    } else {
      setUser([]); // Set default value if savedTodo is not an array
    }
  }, []);

  const handleToDoDelete = (index) => {
    let reducedTodos = [...user];
    reducedTodos.splice(index, 1);
    setUser(reducedTodos);

    localStorage.setItem("List", JSON.stringify(reducedTodos));
    setUser(reducedTodos);
  };

  const handleEdit = (index) => {
    const editUser = user[index];
    setName(editUser.name);
    setDesc(editUser.desc);
    setEditIndex(index);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handleStatusChange = (index, status) => {
    const updatedUser = { ...user[index], status: status };
    const updatedUserList = [
      ...user.slice(0, index),
      updatedUser,
      ...user.slice(index + 1),
    ];

    setUser(updatedUserList);

    localStorage.setItem("List", JSON.stringify(updatedUserList));
  };

  return (
    <form className="my-5">
      <div className="row">
        <div className="col-xl-4">
          <input
            type="text"
            value={name}
            className="form-control"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-xl-4">
          <input
            type="text"
            value={desc}
            className="form-control"
            placeholder="Description"
            onChange={(event) => setDesc(event.target.value)}
          />
        </div>
        <div className="col-xl-1">
          {name.trim() === "" || desc.trim() === "" ? (
            <button
              disabled
              className="btn btn-primary "
              type="submit"
              onClick={addNewUser}
              style={{
                backgroundColor: "#13ad89",
                color: "white",
                border: "0",
                width: "150px",
              }}
            >
              Add Todo
            </button>
          ) : (
            <button
              type="submit"
              onClick={(e) => e.preventDefault(addNewUser())}
              className=" btn rounded "
              style={{
                backgroundColor: "#13ad89",
                color: "white",
                border: "0",
                width: "150px",
              }}
            >
              Add Todo
            </button>
          )}
        </div>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-xl-9 sm-12">
          <h2>MY TODOS</h2>
        </div>
        <div className="col-xl-2 sm-12 primary  ">
          <Filter
            onFilterChange={handleFilterChange}
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus}
          />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-19">
            {user.map((item, index) => {
              if (filterStatus === "All" || filterStatus === item.status) {
                return (
                  <List
                    user={item}
                    handleToDoDelete={() => handleToDoDelete(index)}
                    handleStatusChange={(status) =>
                      handleStatusChange(index, status)
                    }
                    handleEdit={() => handleEdit(index)}
                    key={index}
                  />
                );
              }
              return null;
            })}
          </div>{" "}
        </div>
      </div>
    </form>
  );
};

export default Input;