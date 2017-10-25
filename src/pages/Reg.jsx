import React from 'react';

export default function Reg() {
    return (
        <section className="registration">
            <form action="" className="reg-form">
                <input type="text" placeholder="Введите логин"/>
                <input type="password" placeholder="Введите пароль"/>
                <input type="submit" value="Регистрация"/>
            </form>
        </section>
    );
}