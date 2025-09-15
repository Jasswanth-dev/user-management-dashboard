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

  return (
    <UserContext.Provider value={{users, addUser}}>
      {children}
    </UserContext.Provider>
  );
};
