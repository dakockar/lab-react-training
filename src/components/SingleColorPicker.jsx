import React, { Component } from 'react'

export default class SingleColorPicker extends Component {

    updateBoxColor = () => {
        const { color, value } = this.props;
        let boxColor = "";
        switch (color) {
            case "r":
                value ? boxColor = `rgb(${value}, 0, 0)` : boxColor = "red";
                break;
            case "g":
                value ? boxColor = `rgb(0, ${value}, 0)` : boxColor = "green";
                break;
            case "b":
                value ? boxColor = `rgb(0, 0, ${value})` : boxColor = "blue";
                break;
        }
        return boxColor;
    }

    render() {
        const { color, onChange } = this.props;

        return (
            <div className="color-picker">
                <div className="color-box" style={{ backgroundColor: this.updateBoxColor() }}></div>
                <span>{color.toUpperCase()}:</span>
                <input onChange={onChange} type="number" name={color} min="0" max="255" placeholder="0" />
            </div>
        )
    }
}
