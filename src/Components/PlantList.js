import React, { useState } from 'react';
import Plant from './Plant'

function PlantList({plants}) {


    return (
        <div className="list">
            <ul>
                {plants.map((plant) => (
                    <Plant plant={plant}/>
                ))}
            </ul>
            </div>
    )
}

export default PlantList;