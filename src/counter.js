import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    counter = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
            // number: this.state.number + 1
        })
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <button onClick={this.counter}>Click Me</button>
                <h1>{this.state.number}</h1>
            </div>

        )
    }
}

export default Counter;