import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import logo from '../../assets/logo.svg';
import { storeNewUser } from '../../features/comment/userSlice';
import './Header.css';

export const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector( state => state.user.data.email );

    // Set the initial values of form
    const initialForm = {
        email: user
    };

    const [ values, handleInputChange ] = useForm(initialForm);
    const { email } = values;

    const handleSubmit = ( e ) => {

        e.preventDefault();

        // Save comment in store
        dispatch(storeNewUser(
            {
                email: email
            }
        ));
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark shadow d-flex p-3'>
            <div className='container-fluid'>
                <NavLink className='justify-content-start ms-2' to='/'>
                    <img className='Header__img-logo img-fluid' src={ logo } alt='Logo'/>
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='nav-center collapse navbar-collapse justify-content-end' id='navbarNav'>
                    <div className='navbar-nav text-center justify-content-start'>
                        <div className='nav-item'>
                        </div>
                    </div>
                    <div className='justify-content-end text-center py-1 mt-2 me-2'>
                        <p className='mb-0 text-white'>
                            <i className='fas fa-user-edit me-2'></i>
                            Comment as:
                        </p>
                        <form onSubmit={ handleSubmit } className='p-0 mt-0'>
                            <div className='input-group mb-2 pe-2'>
                                <input
                                    autoComplete='off'
                                    type='text' 
                                    className='form-control border-0 bg-transparent text-white text-center' 
                                    name='email' 
                                    onChange={ handleInputChange }
                                    value={ email }
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};
