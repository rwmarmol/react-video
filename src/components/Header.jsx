import React from'react';
import '../assets/styles/components/Header.scss';

// staticfiles
import logo from '../assets/static/logo-bw.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (

    <header className="header">
        <img className="header__img" src={logo}></img>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="user"></img>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="#">Cuenta</a></li>
                <li><a href="#">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>

)

export default Header;
