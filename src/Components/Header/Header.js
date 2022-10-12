import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div><h2>Zero to Hero</h2></div>
            <div  >
                <Link className='link-div ' to='/'>Home</Link>
            </div>
            <div>
                <Link className='link-div ' to='/blog'>Blogs</Link>
            </div>
            <div>
                <Link className='link-div ' to='/statistic'>Statistics</Link>
            </div>
        </nav>
    );
};

export default Header;