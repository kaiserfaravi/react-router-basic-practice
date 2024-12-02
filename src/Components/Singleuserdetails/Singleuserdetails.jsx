import React from 'react';
import { useLoaderData } from 'react-router';


const Singleuserdetails = () => {
    const user = useLoaderData()
    const {name} = user;
    console.log(user);
  
    return (
        <div>
            <h1>Name : {name} </h1>
        </div>
    );
};

export default Singleuserdetails;