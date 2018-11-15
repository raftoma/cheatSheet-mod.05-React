import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render(){
        return (
            <h1>Cześć {this.props.name} {this.props.surname}</h1>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Hello name={"Marcin"} surname="Kieruzel" />,
        document.getElementById('app')
    );
});