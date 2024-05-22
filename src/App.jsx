// src/App.jsx
import React from 'react';
import Shopping from './component';
// import Card from './card';

function App() {
  const products = [
    { name: 'Oeufs', quantity: 6},
    { name: 'Avocat', quantity: 3},
    { name: 'Banane', quantity: 4},
  ]
  return (
    <Shopping
      title="Ma liste de courses !"
      products={products} />
    );
    // <div className="App">
    //   <Shopping title="Liste des courses" />
    //   <Card title="Pooker" />
  
    // </div>
  }
  
  export default App;
  