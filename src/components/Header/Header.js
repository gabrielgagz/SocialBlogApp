import React from 'react';
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

        const checkIcon = document.querySelector('.fa-check-circle');
        checkIcon.classList.add('animate__animated', 'animate__fadeIn');
        checkIcon.classList.remove('Header__check_0');

        setTimeout(() => {
            checkIcon.classList.add('Header__check_0');
            checkIcon.classList.remove('animate__animated', 'animate__fadeIn');
        }, 3000);

        e.preventDefault();

        // Save comment in store
        dispatch(storeNewUser(
            {
                email: email
            }
        ));
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow p-3'>
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
                        <p className='mb-0 text-white font- Header__right'>
                            EDIT USER E-MAIL:
                        </p>
                        <form onSubmit={ handleSubmit } className='p-0 mt-0'>
                            <div className='input-group mb-2'>
                                <input
                                    autoComplete='off'
                                    type='email' 
                                    className='form-control border-0 bg-transparent text-white text-center' 
                                    name='email' 
                                    onChange={ handleInputChange }
                                    value={ email }
                                    required
                                />
                                <i className='fas fa-check-circle Header__check Header__check_0 mt-2'></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
};
