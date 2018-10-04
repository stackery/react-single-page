import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Content from './components/Content';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="container">
            <ul className="nav">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/content">Content</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <div className="pages">
              <Route exact path="/" component={Home}/>
              <Route path="/content" component={Content}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
