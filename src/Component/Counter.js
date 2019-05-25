import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
      this.state = {count:0};

  }


    increment = () => {
      this.setState(oldState => ({
        count:oldState.count + 1
      }));
    }

    counterReset = () => {
      this.setState(oldState => ({
        count:oldState.count=0
      }));
    }

    render() {
      return (
        <div  className="Main">

     <div onClick={this.increment} className="counter">

     <p className="counter-p">{this.state.count}</p>

     </div>
     <button onClick={this.counterReset}>Counter reset</button>
        </div>
      );
    }




  }

export default Counter;
