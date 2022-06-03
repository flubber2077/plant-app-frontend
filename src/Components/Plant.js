import React, { useState } from 'react';

function Plant({plant}) {
    
    function handleDeleteClick() {
        console.log(plant.id);
        fetch(`http://localhost:9292/plants/${plant.id}`, {
            method: "DELETE",
        });

    //     onMessageDelete(plant.id);
    }


    console.log(plant)
    return (
        <div>
            <span className="name">{plant.name} </span>
            <span>Last Watered at {plant.watered_at}</span>
            <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </div>
    )
}

export default Plant