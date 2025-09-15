import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../context";
import './index.css'

const UserDetails = () => {
    const { id } = useParams();
    const { users } = useContext(UserContext);

    const user = users[id];
    return (
        <div className="bg-container">
            <h1 className="main-heading">User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street} {user.address.suite} {user.address.zipcode}</p>
            <p><strong>geo:</strong> {user.address.geo.lat} {user.address.geo.lng}</p>

            <Link to={`/edit-user/${id}`} className="link-item">
                <button type="button" className="edit-button">
                    edit
                </button>
            </Link>
        </div>
    )
}

export default UserDetails;