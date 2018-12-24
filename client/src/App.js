import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        apiResponse: ""
    };

    callApi = () => {
        fetch("http://localhost:9000/testApi")
            .then((res) => res.text())
            .then((res) => {
                this.setState({ apiResponse: res });
            });
    };

    componentDidMount() {
        this.callApi();
    }

    render() {
        return <p className="App-intro">{this.state.apiResponse}</p>;
    }
}

export default App;
