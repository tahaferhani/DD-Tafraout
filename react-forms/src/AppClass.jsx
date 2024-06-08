import { Component } from "react";

class App extends Component {
    constructor() {
        this.state = {
            users: [],
            city: ""
        }
    }

    // Life cycle functions
    componentDidMount() {
        this.setState({
            users: [1, 23],
            city: "Agadir"
        })
    }

    render() {
        return <div>
            {this.state.city}
        </div>
    }
}

export default App;