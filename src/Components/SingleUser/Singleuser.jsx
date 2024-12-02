import React from 'react';
import './SingleUser.css'
import { Link } from 'react-router';

const Singleuser = ({user}) => {
    // console.log(user);
    const {name,email,phone,id}= user;
    return (
        <div className='singleuser'>
            <h2>Name : {name} </h2>
            <p>Email : {email} </p>
            <p>Phone : {phone} </p>
            <Link to={`/user/${id}`}>Show details</Link>
            <Link to={`/users/${id}`}> <button>Show details different way</button> </Link>
        </div>
    );
};

export default Singleuser;