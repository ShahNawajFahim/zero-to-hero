import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div><h2>Zero to Hero</h2></div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blogs</Link>
                <Link to='/statistic'>Statistics</Link>
            </div>
        </nav>
    );
};

export default Header;