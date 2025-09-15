import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';
import UserDetails from './pages/UserDetails';


export default function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                    <Route path="/add-user" element={<UserForm />} />
                    <Route path="/edit-user/:id" element={<UserForm />} />
                </Routes>
        </Router>
    );
};
