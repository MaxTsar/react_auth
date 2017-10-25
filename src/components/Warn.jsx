import React from 'react';

export default function Warn() {
    return (
        <section className="warn">
            <p>В данный момент хостинг не работает с NodeJS! Код можно посмотреть на <a href="https://github.com/MaxTsar" className="git">github.</a></p>
        </section>
    );
}