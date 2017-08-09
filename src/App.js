import React, { Component } from 'react';
import Section from './Section';

import atom from './sections/atom.md.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Section text={atom} />
      </div>
    );
  }
}

export default App;
