import { Component } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    );
  }
}
