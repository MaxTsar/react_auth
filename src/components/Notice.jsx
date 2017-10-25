import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Notice() {
    return (
        <section className="notice">
            <h2>Чтобы оставить комментарий необходиом <NavLink className="notice-redirect" to="/login">зарегистрироваться!</NavLink></h2>
        </section>
    );
}