import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context";
import './index.css'

const UserDetails = () => {
    const { id } = useParams();
    const { users, deleteUser } = useContext(UserContext);
    const navigate = useNavigate();

    const user = users[id-1];

    const onDelete = () => {
        deleteUser(user.id);
        navigate("/", { replace: true });
    }

    if (!user) {
        return <div className="bg-container"><h1 className="main-heading">User not found</h1></div>;
    }
    return (
        <div className="bg-container">
            <h1 className="main-heading">User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street} {user.address.suite} {user.address.zipcode}</p>
            <p><strong>geo:</strong> {user.address.geo.lat} {user.address.geo.lng}</p>

            <div className="button-container">
                <Link to={`/edit-user/${id}`} className="link-item">
                    <button type="button" className="edit-button">
                        Edit
                    </button>
                </Link>
                
                <button type="button" onClick={onDelete} className="delete-button">
                    Delete
                </button>
            </div>
            
        </div>
    )
}

export default UserDetails;