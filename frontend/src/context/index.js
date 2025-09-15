import React, { createContext, useState, useEffect } from "react";
import { fetchUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadUsers();
  }, []);

  const addUser = (newuser) => {
    const user = { id: users.length + 1, ...newuser };
    setUsers((prevUsers) => [...prevUsers, user]);
  }

  const updateUser = (updatedData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedData.id ? { ...user, ...updatedData } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
      {children}
    </UserContext.Provider>
  );
};
