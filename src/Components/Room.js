import React, {useState} from 'react';
function Room ({room}) {
    function handleDeleteClick() {

    }

return (
    <div>
        <span className="name">{room.name} </span>
        <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
                X
            </span>
        </button>
    </div>
)
}

export default Room;