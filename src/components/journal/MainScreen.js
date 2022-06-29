import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { Sidebar } from './Sidebar';



 

export const MainScreen = () => {


    return (
        <>
            <Navbar/>   
            <div className="container">
                <Sidebar />
                </div>
   
        </>
    )
}
