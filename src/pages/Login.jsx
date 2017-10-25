import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
    function submit(e) {
        e.preventDefault();
        console.log('submit ')
        const user = {};
        user.nick = document.querySelector('.nick').value;
        user.password = document.querySelector('.password').value;
        user.auth = true;
        console.log(user);
        props.enter(user);
    }
    return (
        props.user.auth
        ?
        <Redirect to="/" />
        :
        <section className="login">
            <h2 className="login-warn">Чтобы войти используйте логин - admin, пароль - admin</h2>
            <form action="" className="login-form" onSubmit={submit}>
                <input type="text" placeholder="Введите логин" className="nick"/>
                <input type="password" placeholder="Введите пароль" className="password"/>
                <input type="submit" value="Войти"/>
            </form>
        </section>
        
    );
}