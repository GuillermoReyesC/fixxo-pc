import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

import { useSelector } from 'react-redux';
import TechnicianScreen from '../technician/TechnicianScreen';
import UserProfile from '../user/UserProfile';
import UserScreen from '../user/UserScreen';
import { MainScreen } from '../journal/MainScreen';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );
    const handleLogout = () => {
        dispatch( startLogout() );
    }

  

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand" to="/">
                Fixxo-pc
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
                        to="/user/:id"
                        
                    >
                        UserProfile
                    </NavLink>
                        

                </div>
            </div>

            <div className="nav-item justify-content-end">
            <ul className="navbar-nav ml-auto">

            <span className="nav-item nav-link text-white">
                      Usuario:  {name}
                    </span>
                    
                <button className="nav-item nav-link btn" onClick={ handleLogout }>
                    Logout
                </button>
                </ul>
            </div>
        </nav>
    )
}