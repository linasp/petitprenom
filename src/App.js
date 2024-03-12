import { useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NameColumn from './NameColumn';
import './App.css'

const App = () => {
  const namesDatabase = useLoaderData();
  const [names, setNames] = useState(['', '', '', '', '']);

  const setNewRandomNames = () => {
    let newRandomNames = [];
    for (let i = 0; i < names.length; i++) {
      newRandomNames[i] = namesDatabase[Math.floor(Math.random() * namesDatabase.length)];
    }

    setNames(newRandomNames);
  };

  const handleKeyPress = (event) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      setNewRandomNames();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className="App">
      {names.map((name, index) => (
        <NameColumn key={index} name={name} />
      ))}
    </div>
  );
};

export default App;