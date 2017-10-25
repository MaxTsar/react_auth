import React from 'react';
import Form from '../components/Form.jsx';
import Notice from '../components/Notice.jsx';
import Post from '../components/Post.jsx';

export default function Home(props) {
    console.log(props.posts);
    return (
        <section className="home">
            {
                props.user.auth
                ?
                <Form sendPost={props.sendPost} />
                :
                <Notice />
            }
            {
                props.posts.map((item) => {
                    return <Post 
                                key={item.id}
                                author={item.author} 
                                time={item.time} 
                                title={item.title} 
                                body={item.text} />
                })
            }
        </section>
    );
}