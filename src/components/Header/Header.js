import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css'

export const Header = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark p2-4 shadow d-flex px-3'>
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
                    <div className='justify-content-end text-center'>
                        <p className='fas fa-user-circle fa-4x me-3 mt-2 Header__user-face'></p>
                        <p className='mt-0 text-white'>email@email.com</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};
