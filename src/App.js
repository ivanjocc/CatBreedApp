import React from 'react';
import './styles/App.css';
import BreedList from './components/BreedList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat Breeds App</h1>
      </header>
      <main>
        <BreedList />
      </main>
    </div>
  );
}

export default App;
