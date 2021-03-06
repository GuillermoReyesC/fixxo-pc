import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { setError, removeError } from '../../actions/ui'
import { startRegisterEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );
    
    

    const [ formValues, handleInputChange ] = useForm({

        name: 'thor',
        email: 'thor@gmail.com',
        password: '123456',
        password2: '123456'

    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = ( e ) => {
        e.preventDefault();
        
        if ( isFormValid() ) {
            dispatch( startRegisterEmailPasswordName(email, password, name) )
        }

    }

    const isFormValid = (  ) => {

       
        if ( name.trim().length === 0 ) {

            dispatch( setError('Name is required') );

            
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is required'))

            
            return false;
        } else if ( password !== password2 || password.lengh < 5 ) {
            dispatch( setError('Password is required, has to match each other or too short'))
            return false;
        }

        dispatch ( removeError() )
        return true



    }
         


    return (
        <>
            <img className="img__logo" src="/logo1.png" alt="fixxo" />
            <h3 className="auth__title">Register</h3>

            <form 
                onSubmit={ handleRegister }
                className="animate__animated animate__fadeIn animate__faster"
            >

               { 
                    msgError && 
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value = { password }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value = { password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
