import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Aside from './Aside'
import Article from './Article'
import Clickbait from './Clickbait'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <Header />
          <main className="expanded row">
            <Article />
            <Aside />
            <Clickbait />
          </main>
          <Footer />
        </body>
      </div>
    );
  }
}

export default App;