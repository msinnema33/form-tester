import React from 'react';
import Characters from './components/searchForm';
// import Location from './components/Location';
// import Episode from './components/Episode';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Front Page
      </header>
      <Episode />
      <Location />
      <Characters />
    </div>
  );
}

export default App;
