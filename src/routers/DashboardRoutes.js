import { Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import { UserScreen } from '../components/user/UserScreen';
import { TechnicianScreen } from '../components/technician/TechnicianScreen';
import { MainScreen } from '../components/journal/MainScreen';
import UserProfile from '../components/user/UserProfile';
import LoginScreen from '../components/auth/LoginScreen';
import  React  from 'react'
import AdminScreen from '../components/admin/AdminScreen';
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="technician" element={<TechnicianScreen />} />
                    <Route path="auth/login" element={<LoginScreen/>} />
                    <Route path="user" element={<UserScreen />} />
                    <Route path="user/:id" element={<UserProfile/>} />
                    <Route path="admin" element={<AdminScreen />} />
                    <Route path="/" element={<MainScreen />} />
                </Switch>
            </div>
        </>
    )
}