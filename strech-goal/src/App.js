import React, {useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://localhost:8080/projects")
      .then(res => {
        console.log(res)
        setData(res);
      })
      .catch(err => {
        console.log(err);
      })
  });
  return (
    <div className="App">
      <h1>Projects</h1>
      
    </div>
  );
}

export default App;
