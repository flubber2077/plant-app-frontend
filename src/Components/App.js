import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header.js';
import PlantList from './PlantList.js'


function App() {

  const [rooms, setRooms] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/rooms")
      .then((r) => r.json())
      .then((rooms) => setRooms(rooms));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);




  return (
    <main>
      <Header rooms={rooms}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default App;
