import React, { Component } from 'react'

export default class BoxColor extends Component {

    convertHex = color => {
        let hexColor = color.toString(16);

        if (hexColor === "0") hexColor = "00";
        return hexColor;
    }

    render() {

        const { r, g, b } = this.props;
        // console.log(this.convertHex(g));

        return (
            <div className="box-color" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} >
                <p>{`rgb(${r}, ${g}, ${b})`}</p>
                <p>#{this.convertHex(r)}{this.convertHex(g)}{this.convertHex(b)}</p>
            </div>
        )
    }
}
