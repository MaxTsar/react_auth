import React from 'react';

export default function Post(props) {
    return (
        <div className="post">
            <h5 className="post-author">От: {props.author}</h5>
            <p className="post-time">{props.time}</p>
            <h3 className="post-title">{props.title}</h3>
            <p className="post-body">{props.body}</p>
        </div>
    );
}