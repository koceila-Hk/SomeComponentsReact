// src/App.jsx
import React from 'react';
import Shopping from './component';
import Card from './card';

function App() {
  return (
    <div className="App">
      <Shopping title="Liste des courses" />
      <Card title="Pooker" />

    </div>
  );
}

export default App;
