import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';


export default function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/add-user" element={<UserForm />} />
                    <Route path="/edit-user/:id" element={<UserForm />} />
                </Routes>
        </Router>
    );
};
