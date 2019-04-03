import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Componenet to pass data //
import PersonalInformationCollector from "./PersonalInformationCollector"
class App extends Component {
  render() {
      // variable that holds fake data //
      const rawDataModule = require("./rawData")
    return (
      <div className="App">
        <header className="App-header">
            {/*My DataCollector  and setting value to data */}
            <PersonalInformationCollector PIrawData={rawDataModule}/>

        </header>
      </div>
    );
  }
}

export default App;
