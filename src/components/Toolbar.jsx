import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Toolbar(props) {
    return (
        <nav>
            <h1><span>TOP</span>BLOG</h1>
            <menu>
                <li><NavLink exact to="/">Главная</NavLink></li>
                {
                    props.user.auth ?
                        <li className="nickname">{props.user.nick}</li>
                        :
                        <li className="auth">
                            <NavLink to="/login" className="login-btn">Войти</NavLink>
                        </li>
                }
            </menu>
        </nav>
    );
}