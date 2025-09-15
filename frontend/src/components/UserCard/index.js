import {Link} from 'react-router-dom';
import './index.css';

const UserCard = (props) => {
    const {userDetails} = props;
    const {id, name, email, phone, company} = userDetails;
    return (
        <li>
            <Link to={`/user/${id}`} className="user-link">
                Name: {name}<br/>
                Email: {email}<br/>
                Phone: {phone}<br/>
                Company: {company.name}
            </Link>
        </li>
    );
}

export default UserCard;