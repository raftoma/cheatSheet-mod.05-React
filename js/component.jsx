// require('../css/style.css');
//import xxx from './nameOfFile';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '100px',
            background: 'green'
        }
    }

    handleEvent = () => {
        this.setState({
            background: 'yellow'
        })
    }

    render() {
        return (

        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: 'red'
            })
        }, 3000)
    }


}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});