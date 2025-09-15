import { useContext } from "react";
import { UserContext } from "../../context";
import UserCard from "../../components/UserCard";
import "./index.css";
import { Link } from "react-router-dom";

const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="bg-container">
        <h1 className="main-heading">User List</h1>
        <Link to="/add-user" className="link-item">
          <button type="button">Add User</button>
        </Link>
        <ul className="users-list">
            {users.map((user) => <UserCard key={user.id} userDetails={user} />)} 
        </ul>
    </div>
  );
};

export default UserList;
