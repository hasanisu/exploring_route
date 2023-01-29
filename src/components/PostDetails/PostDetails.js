import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body, userId} = post;

    const nevigate = useNavigate();
    const getAuthor =()=>{
        nevigate(`/bondhu/${userId}`)
    }

    return (
        <div>
            <h2>Details about post {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={getAuthor}>Get Author</button>
        </div>
    );
};

export default PostDetails;