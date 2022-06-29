import React from 'react'
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { useSelector } from 'react-redux';



export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
        
    }



    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-user"></i>
                    <span> { name }</span>
                </h3>

                <button 
                    
                    className="btn"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>
            <div className="card" >
            <img className="img__profile" src="/user.png" alt="user" />

            </div>
            
            


          

        </aside>
    )
}
