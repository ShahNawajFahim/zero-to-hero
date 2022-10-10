import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blogs</Link>
            <Link to='/statistic'>Statistics</Link>
        </nav>
    );
};

export default Header;