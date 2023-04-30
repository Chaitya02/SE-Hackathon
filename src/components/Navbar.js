import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import LogoutButton from './LogoutBtn';

function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} style={{ backgroundColor: "#F6F1F1" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Black 🎩</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Compete</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Know More</a>
                            </li>
                            <li>
                                {localStorage.getItem('token') && <LogoutButton/>}
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode.toUpperCase() + " Mode"}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;