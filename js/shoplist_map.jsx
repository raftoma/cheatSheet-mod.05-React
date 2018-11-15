import React from 'react';
import ReactDOM from 'react-dom';

const database = [
    {
        title   :   'Mysz komputerowa',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg'
    },
    {
        title   :   'Klawiatura',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png'
    },
    {
        title   :   'Laptop programisty',
        image   :   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg'
    }
]

class ShopItem extends React.Component {
    render(){
        return (
            <li>
                <h1>{this.props.productDetails.title}</h1>
                <img src={this.props.productDetails.image} />
            </li>
        )
    }
}

class ShopList extends React.Component {
    render(){
        let products = this.props.data.map((e,i) => {
            return <ShopItem key={i} productDetails={e}/>
        })

        return (
            <ul>
                {products}
            </ul>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ShopList data={database} />
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});