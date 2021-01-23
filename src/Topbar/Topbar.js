import React from 'react';

import classes from './Topbar.module.css';
import amazon from './img/amazon.jpg';

const Topbar = () => {
    return(

    <header className="App-header">
        <nav className={classes.Topbar}>
        <img src={amazon} alt="Amazon Logo" />
        </nav>
    </header>
    )
}

export default Topbar;