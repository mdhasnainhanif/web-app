import React, { useEffect } from "react";
import "../index.css";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const userData = JSON.parse(localStorage.getItem("data")) || [];

  useEffect(() => {
    setTodos(userData);
  }, []);
  console.log(todos, "my todos");

  const handleDelete = (id) => {
    const removeTodo = todos?.filter((item) => {
      return item.id !== id;
    });
    setTodos(removeTodo);
    localStorage.setItem("data", JSON.stringify(removeTodo));
  };

  return (
    <>
      <Header />

      <div className="container">
        <Link to="/userform">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-auto me-48 mt-10 block mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
            Add User
          </button>
        </Link>

        <table className="bg-slate-600 text-lime-50 w-4/5 mt-20 border ms-10">
          <thead>
            <tr>
              <th className="p-4 border">s.no</th>
              <th className="p-4 border">First Name</th>
              <th className="p-4 border">Last Name</th>
              <th className="p-4 border">Email</th>
              <th className="p-4 border">Message</th>
              <th className="p-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos?.length > 0 ? (
              <>
                {todos?.map((item, index) => (
                  <tr key={item?.id}>
                    <td className="p-4 border">{item?.id}</td>
                    <td className="p-4 border">{item?.firstName}</td>
                    <td className="p-4 border">{item?.lastName}</td>
                    <td className="p-4 border">{item?.email}</td>
                    <td className="p-4 border">{item?.message}</td>
                    <td className="p-4 border">
                      <button
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto block mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                        onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>{<tr><td className="p-4 text-center">Users Not Available</td></tr>}</>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
