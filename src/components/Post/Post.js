import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    const nevigate = useNavigate();
    const nevigateHandler=()=>{
        nevigate(`/post/${id}`)
    };

    return (
        <div className='post'>
            <h3>Post Title: {title}</h3>
            <p>Post Body: {body}</p>
            <p><small><Link to={`/post/${id}`}>
                <button>Show Details</button>
                </Link></small>
            </p>
            <button onClick={nevigateHandler}>Show Details2</button>
            <p><Link to={`/post/${id}`}>visit: {id}</Link></p>
        </div>
    );
};

export default Post;