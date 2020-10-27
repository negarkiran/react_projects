import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/list" className="item">
                Word List
            </Link>
            <Link to="/add" className="item">
                Add
            </Link>
            <div className="right menu">
            </div>
        </div>
    );
};

export default Header;