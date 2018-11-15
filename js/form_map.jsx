import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function () {
    class SelectOrType extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: '',
                value: '',
                items: this.props.items
            }
        }

        render() {
            const books = this.state.items.map((e, i) => {
                return <option key={i}>{e}</option>
            })
            return (
                <div>
                    <select value={this.state.selected} onChange={this.handleChange}>
                        {books}
                        <option>Inne</option>
                    </select>
                    {this.state.selected === 'Inne'
                    && <div>
                        <input value={this.state.value} onChange={this.handleInputChange} type='text'/>
                        <button onClick={this.handleClick}>Dodaj</button>
                    </div>
                    }
                </div>
            )
        }

        handleChange = (e) => {
            this.setState({
                selected: e.currentTarget.value
            })
        }
        handleInputChange = (e) => {
            this.setState({
                value: e.currentTarget.value
            })
        }
        handleClick = () => {
            this.setState({
                items: [...this.state.items, this.state.value]
            }, () => this.setState({
                value: ''
            }))
        }
    }

    ReactDOM.render(
        <SelectOrType
            items={['Encyklopedia', 'Chłopcy z placu broni', 'Zaginiony symbol', 'Pinokio', 'Blaszany bębenek']}/>,
        document.getElementById('app')
    );
});