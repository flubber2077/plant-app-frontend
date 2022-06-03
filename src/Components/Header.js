import React, { useState } from 'react';
import RoomList from './RoomList';

function Header({rooms}) {

    return (
        <header>
            <h1>Plant App</h1>
            <p>By Dylan Jordan</p>
            <RoomList rooms={rooms}/>
        </header>
    )
}

export default Header;