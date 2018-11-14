import React, { Component } from 'react';
import './App.css';

import FilteredTestTable from './FilteredTestTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <FilteredTestTable/>
        </header>
      </div>
    );
  }
}

export default App;
