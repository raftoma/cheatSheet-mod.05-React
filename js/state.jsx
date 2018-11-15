import React from 'react';
import ReactDOM from 'react-dom';

class NumberInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test:"To jest test: "
        }
    }

    render() {
        return (
            <div>
                {this.state.test}
                {this.props.number}
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <>
                <NumberInfo number={7}/>
                <NumberInfo number={23}/>
                <NumberInfo number={87}/>
                <NumberInfo number={712}/>
            </>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});