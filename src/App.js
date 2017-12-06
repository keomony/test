import React, {Component} from 'react';
import './App.css';
import Summary from './Summary';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hello World!</h1>
                </header>
                <section className="Summary-Option">
                    <p> Click here to go to your Summary page. <Summary value={Summary}/></p>
                </section>
            </div>
        );
    }
}

export default App;
