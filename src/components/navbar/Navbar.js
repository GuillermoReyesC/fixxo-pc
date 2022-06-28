import react from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

export const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        navigate('/auth/login', 
            {
                replace: true
            });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link className="navbar-brand" to="/">
                inicio
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">    

                  <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/technician"
                    >
                        TechnicianScreen
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/user"
                    >
                        UserScreen
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/journal"
                    >
                        JournalScreen
                    </NavLink>
                
                        

                </div>
            </div>

            <div className="navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                     { name }
                    </span>
                <button className="nav-item nav-link btn" onClick={ handleLogout }>
                    Logout
                </button>
                </ul>
            </div>
        </nav>
    )
}