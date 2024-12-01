import React from 'react';
import './SingleUser.css'

const Singleuser = ({user}) => {
    console.log(user);
    const {name,email,phone}= user;
    return (
        <div className='singleuser'>
            <h2>Name : {name} </h2>
            <p>Email : {email} </p>
            <p>Phone : {phone} </p>
        </div>
    );
};

export default Singleuser;