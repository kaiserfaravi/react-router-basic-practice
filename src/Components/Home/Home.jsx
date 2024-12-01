import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h1>This is Home jeta change hobena</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;