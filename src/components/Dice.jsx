import React, { Component } from 'react'

export default class Dice extends Component {

    state = {
        img: `/img/dice6.png`
    }

    rollDice = () => {

        let randomNum = Math.floor(Math.random() * 5) + 1;

        this.setState({
            img: `/img/dice-empty.png`
        })

        setTimeout(() => {
            this.setState({
                img: `/img/dice${randomNum}.png`
            })
        }, 1000)
    }

    render() {
        const { img } = this.state;
        return (
            <img className="dice" onClick={this.rollDice} src={img} alt="dice" />
        )
    }
}
