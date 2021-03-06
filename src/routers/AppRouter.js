import React, { useEffect, useState } from 'react';
import {Navigate } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';



import { AuthRouter } from './AuthRouter';
import { MainScreen } from '../components/journal/MainScreen';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute.js';
import { PublicRoute } from './PublicRoute';
import {  startLoadingNotes } from '../actions/notes';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {



    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState( true );
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );


    useEffect(() => {
        firebase.auth().onAuthStateChanged( async(user) => {
            
                if (user?.uid) {
                    dispatch( login( user.uid, user.displayName ) );
                    setIsLoggedIn( true );

                   
                    dispatch( startLoadingNotes( user.uid ) )

                   console.log(user.displayName)


                    console.log('user logged in');
                } else {
                    setIsLoggedIn( false );
                    console.log('user not logged in');
                }

                setChecking( false );
            
        })
    }, [dispatch, setChecking, setIsLoggedIn] );   
    
    if ( checking ) {
        return (
            <h1>wait..</h1>
        )
    }



    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        isAuthenticated={ isLoggedIn }
                        component={ AuthRouter }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/*"
                        component={ DashboardRoutes }
                        
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
