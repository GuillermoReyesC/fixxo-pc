import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { UserScreen } from '../components/user/UserScreen';
import { TechnicianScreen } from '../components/technician/TechnicianScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import UserProfile from '../components/user/UserProfile';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<JournalScreen />} />
                    <Route path="/user" element={<UserScreen />} />
                    <Route path="/technician" element={<TechnicianScreen />} />
                    <Route path="/user/:id" element={<UserProfile/>} />
                </Routes>
            </div>
        </>
    )
}