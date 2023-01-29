import React from 'react';
import { Link } from 'react-router-dom';
import './Bondhu.css'

const Bondhu = ({bondhu}) => {
    const {name, id, email, username} = bondhu;
    console.log(bondhu)
    return (
        <div className='bondhu'>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p><small>User Name: <Link to={`/bondhu/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Bondhu;