import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const[verification, setVerification] = useState([]);
    const [filter, setFilter] = useState('all');

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      try {
      const response = await fetch('http://localhost:8080/api/upload/excel', {
        method: 'POST',
        body: formData,
      });
      alert("Successfully uploaded file");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>

    <h1>Name's Albert</h1>
    </div>
  );
}

export default App;
