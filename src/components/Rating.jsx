import React, { Component } from 'react'

export default class Rating extends Component {

    calculateStars = rating => {
        let starArr = [];

        for (let i = 1; i <= Math.round(rating); i++) {
            starArr.push("★");
        }
        for (let i = Math.round(rating); i < 5; i++) {
            starArr.push("☆");
        }

        return starArr;
    }

    render() {
        const rating = this.props.children;

        return (
            <div className="rating">
                {this.calculateStars(rating)}
            </div>
        )
    }
}
