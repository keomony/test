import React, { Component } from 'react';
import './App.css';
import Summary from './Summary';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hello World!</h1>
                </header>
                <p className="App-intro">
                    Welcome to our app.
                </p>
                <p className="User-Option">
                    Click here to go to your Summary page.
                    <Summary value={Summary}/>
                </p>
            </div>
        );
    }
}

export default App;
