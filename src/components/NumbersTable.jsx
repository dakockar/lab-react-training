import React, { Component } from 'react'

export default class NumbersTable extends Component {

    createNumArray = (limit) => {
        let arr = [];
        for (let i = 1; i <= limit; i++) {
            arr.push(i);
        }

        return arr;
    }

    render() {
        return (
            <div className="container">
                {
                    this.createNumArray(this.props.limit).map(i => {
                        return (
                            <div className="box" key={i}>{i}</div>
                        )
                    })
                }
            </div>
        )
    }
}
