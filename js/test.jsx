import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
   constructor(props) {
   super(props);

   }

   handleClick = (e) => {
       e.preventDefault();
       console.log(e);
       console.log(e.currentTarget);
   }

   render(){
     return (
         <>
             <button onClick={this.handleClick} value={this.text}>Click me!</button>
         </>
     )
   }
 }

 class App extends React.Component {
    render(){
      return (
          <Test />
      )
    }
  }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

