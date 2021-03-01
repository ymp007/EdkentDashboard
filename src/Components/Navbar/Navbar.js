import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <a className="navbar-brand">Brand</a>
                <div className="nav-item dropdown">
                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="profile">
                            <img src="profile.jpg" className="rounded-circle" alt="Cinque Terre" />
                            <p><div className="dropdown-toggle">Yashkumar Patel</div>Frontend Developer</p>

                        </div>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Account Setting</a>
                        <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
