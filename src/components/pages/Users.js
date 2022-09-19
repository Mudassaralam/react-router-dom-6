import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Userchild from "./Userchild";
import { useParams } from "react-router-dom";
function Users() {

    const params = useParams();
    const {name} =  params;
    console.log(params)


  const users = [
    { id: 1, name: "Ali", email: "ali@test.com" },
    { id: 2, name: "Ahmad", email: "ahmad@test.com" },
    { id: 3, name: "Asam", email: "asam@test.com" },
    { id: 4, name: "Osam", email: "osam@test.com" },
  ];
  return (
    <>
      <h3>Use Params And Dynamic Routing</h3>
      <h3>This is {name} page</h3>


      {users.map((items, key) => {
        return (
          <ul key={key}>
            <li>{items.id}</li>
            <Link to={`/users/` + items.id}>
              <li>{items.name}</li>
            </Link>
            <li>{items.email}</li>
          </ul>
        );
      })}
     
    </>
  );
}
export default Users;
