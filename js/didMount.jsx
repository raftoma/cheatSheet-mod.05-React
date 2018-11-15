import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log("rendered");
        return (
            <>
            </>
        )
    }

    componentDidMount() {
        console.log("mounted");
    }

    componentDidUpdate(){
        console.log("updated");
    }

}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});