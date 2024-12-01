import React from 'react';
import { useLoaderData } from 'react-router';
import Singleuser from '../SingleUser/Singleuser';
import './Users.css'

const Users = () => {
    const userData=useLoaderData();
    console.log(userData); 
    return (
        <div>
            <h1>Users lenghth {userData.length} </h1>
            <div className='alluser'>
            {
                userData.map(user=> <Singleuser
                key={user.id}
                user ={user}
                ></Singleuser>)
            }
            </div>
        </div>
    );
};

export default Users;