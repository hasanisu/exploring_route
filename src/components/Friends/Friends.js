import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bondhu from '../Bondhu/Bondhu';


const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h2>I have so many friends! yah hooo!!!!</h2>
            
            {
                friends.map(bondhu => <Bondhu
                key={bondhu.id}
                bondhu={bondhu}
                ></Bondhu>)
            }
        </div>
    );
};

export default Friends;