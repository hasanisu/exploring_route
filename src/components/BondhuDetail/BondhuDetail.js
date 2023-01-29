import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BondhuDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>This is the detail page of friends</h2>
            <h4>Name: {friend.name}</h4>
            <p>Call her/him: {friend.phone}</p>
        </div>
    );
};

export default BondhuDetail;