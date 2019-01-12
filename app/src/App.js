import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Button, Combobox, Pane, TextInput } from 'evergreen-ui'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	    <Button>I am using 🌲 Evergreen!</Button>
<Combobox
  openOnFocus
  width="100%"
  items={['Banana', 'Orange', 'Apple', 'Mango']}
  onChange={selected => console.log(selected)}
  placeholder="Fruit"
/>
	    </div>
    );
  }
}

export default App;
