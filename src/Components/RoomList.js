import React, { useState } from 'react';
import Room from './Room'

function RoomList({rooms}) {


    return (
        <div className="list">
            <ul>
                {rooms.map((room) => (
                    <Room room={room}/>
                ))}
            </ul>
            </div>
    )
}

export default RoomList;