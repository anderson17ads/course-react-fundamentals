import React, { Component } from 'react';

import Display from './Display';
import Buttons from './Buttons';
import Form from './Form';

import './Counter.css';

export default class Counter extends Component {

    state = {
        number: this.props.number || 0,
        step: this.props.step || 5
    }

    add = () => {
        this.setState({
            number: this.state.number + this.state.step
        });
    }

    reduce = () => {
        const number = this.state.number - this.state.step;

        this.setState({
            number: number > 0 ? number : 0
        });
    }

    handleStep = e => {
        this.setState({
            step: parseInt(e.target.value)
        });
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display number={this.state.number} />
                <Form step={this.state.step} handleStep={this.handleStep} />
                <Buttons add={this.add} reduce={this.reduce} />
            </div>
        );
    }
}