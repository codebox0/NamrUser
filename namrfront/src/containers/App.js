import React, {Component} from 'react';
import './App.css';
import Cockpit from "../components/Cockpit/Cockpit";
import Pannel from "../components/Panels/Pannel";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Cockpit title={this.props.appTitle}/>
                <Pannel/>
            </div>
        );
    }
}

export default App;
