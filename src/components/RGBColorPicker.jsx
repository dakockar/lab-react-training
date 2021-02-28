import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {

    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0,
    }

    handleColorChange = (e) => {
        let newColor = e.target.value;

        if (!newColor) newColor = 0;

        switch (e.target.name) {
            case "r":
                this.setState({
                    rValue: newColor,
                });
                break;
            case "g":
                this.setState({
                    gValue: newColor,
                });
                break;
            case "b":
                this.setState({
                    bValue: newColor,
                });
                break;
        }
    }

    render() {

        const { rValue, gValue, bValue } = this.state;

        return (
            <div>
                <div>
                    <SingleColorPicker color="r" value={rValue} onChange={this.handleColorChange} />
                    <SingleColorPicker color="g" value={gValue} onChange={this.handleColorChange} />
                    <SingleColorPicker color="b" value={bValue} onChange={this.handleColorChange} />

                    <div className="color-picker">
                        <div className="color-box" style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}></div>
                        <span>{`rgb(${rValue}, ${gValue}, ${bValue})`}</span>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}
