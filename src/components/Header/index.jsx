import React from 'react';
import logo from '../../logo.png';

export const Header = function() {
    const style = {
        height: '100px',
        padding: '20px',
        color: 'white',
        textAlign: 'left'
    };

    return (
        <header style={style}>
            <img src={logo} alt="Shpock" />
        </header>
    );
}