import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <a className="navbar-brand">Brand</a>
                <div class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="profile">
                            <img src="profile.jpg" className="rounded-circle" alt="Cinque Terre" />
                            <p><div className="dropdown-toggle">Yashkumar Patel</div>Frontend Developer</p>

                        </div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Profile</a>
                        <a class="dropdown-item" href="#">Account Setting</a>
                        <div className="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
