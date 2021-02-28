import React, { Component } from 'react'

export default class LikeButton extends Component {

    state = {
        count: 0,
        bgColor: "purple"
    }

    incrementLike = () => {
        this.setState({ count: this.state.count + 1 })
    }

    changeColor = () => {
        let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
        let randomNum = Math.floor(Math.random() * colors.length);
        this.setState({ bgColor: colors[randomNum] });
    }

    handleClick = () => {
        this.incrementLike();
        this.changeColor();
    }

    render() {
        const { bgColor, count } = this.state;
        return (
            <button
                onClick={this.handleClick}
                style={{ backgroundColor: bgColor }}>
                {count} Likes
            </button>
        )
    }
}
