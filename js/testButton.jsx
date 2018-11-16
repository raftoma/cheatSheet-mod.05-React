//### Własny checkbox (~ 5min - 10min)
//
// Stwórz komponent `MyCheckbox`.
//
// Ma on zawierać jeden przycisk, który wyświetla na początku "NIE".
// Po jego kliknięciu ma się zmienić napis na "TAK", po następnym kliknięciu spowrotem na "NIE" itd.
// **Aby wyświetlić odpowiedni tekst użyj operatora trójargumentowego bezpośrednio wewnętrz JSX.**
//
// Wyrenderuj i przetestuj swój komponent.
//
// **Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać
// komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

import React from 'react';
import ReactDOM from 'react-dom';

class MyCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            yes: true
        }
    }

    handleClick = () => {
        this.setState({
            yes: !this.state.yes
        })
    }

    render(){
        return (
            <button onClick={this.handleClick}>{this.state.yes ? "Tak" : "Nie"}</button>
        )
    }
}

class App extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <MyCheckbox />
     )
   }
 }


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});