import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { UserContext } from "../../context";
import './index.css';

const UserForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: {name: ''}, address: {street: '', suite: '', zipcode: '', city: '', geo : {lat: '', lng: '' }}});
    const { id } = useParams();
    const { users, addUser, updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (id){
            const user = users[id-1];
            if (user){
                setFormData(user);
            }
        }
    }, [id, users]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCompanyChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ 
            ...prevState,
            company: {
                ...prevState.company,
                [name]: value
            }
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            address: {
                ...prevState.address,
                [name]: value
            }
        }));
    };
    const handleGeoChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            address: { 
                ...prevState.address,
                geo: {
                    ...prevState.address.geo,
                    [name]: value
                }
            }
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateUser(formData);
        }else{
            addUser(formData);
        }
        navigate('/', { replace: true });
    };

    return (
        <div className="bg-container">
            <h1 className="main-heading">{id ? 'Edit User' : 'Add User'}</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <label className="label" htmlFor="name">Name:</label>
                <input className="input-field" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br/>
                <label className="label" htmlFor="email">Email:</label>
                <input className="input-field" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br/>
                <label className="label" htmlFor="phone">Phone:</label>
                <input className="input-field" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br/>
                <label className="label" htmlFor="company">Company:</label>
                <input className="input-field" type="text" id="company" name="name" value={formData.company.name} onChange={handleCompanyChange} required /><br/>
                <fieldset className="fieldset">
                    <legend>Address:</legend>
                    <label className="label" htmlFor="street">Street:</label>
                    <input className="input-field" type="text" id="street" name="street" value={formData.address.street} onChange={handleAddressChange} required /><br/>
                    <label className="label" htmlFor="suite">Suite:</label>
                    <input className="input-field" type="text" id="suite" name="suite" value={formData.address.suite} onChange={handleAddressChange} required /><br/>
                    <label className="label" htmlFor="zipcode">Zipcode:</label>
                    <input className="input-field" type="text" id="zipcode" name="zipcode" value={formData.address.zipcode} onChange={handleAddressChange} required /><br/>
                    <label className="label" htmlFor="city">City:</label>
                    <input className="input-field" type="text" id="city" name="city" value={formData.address.city} onChange={handleAddressChange} required /><br/>
                    <fieldset className="fieldset">
                        <legend>Geo:</legend>
                        <label className="label" htmlFor="lat">Latitude:</label>
                        <input className="input-field" type="text" id="lat" name="lat" value={formData.address.geo.lat} onChange={handleGeoChange} required /><br/>
                        <label className="label" htmlFor="lng">Longitude:</label>
                        <input className="input-field" type="text" id="lng" name="lng" value={formData.address.geo.lng} onChange={handleGeoChange} required /><br/>
                    </fieldset>
                </fieldset>
                <button type="submit" className="submit-button">{id ? 'Update User' : 'Add User'}</button>
            </form>
        </div>
    )
}

export default UserForm;