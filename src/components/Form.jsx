import React from 'react';

export default function Form(props) {
    function sendPost(e) {
        e.preventDefault();
        const titleForm = document.querySelector('.form-title');
        const textForm = document.querySelector('.form-text');
        const title = titleForm.value;
        const text = textForm.value;
        if((title.length && text.length) >= 2) {
            titleForm.value = '';
            textForm.value = '';
            const post = {
                title,
                text
            };
            props.sendPost(post);
        }
    }

    return (
        <form className="add-form" onSubmit={sendPost}>
            <input className="form-title" type="text" placeholder="Введи заголовок"/>
            <textarea className="form-text" placeholder="Введите сообщение"></textarea>
            <input className="form-btn" type="submit" value="Добавить"/>
        </form>
    );
}