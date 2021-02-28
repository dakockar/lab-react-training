import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        isClicked: false,
        img: this.props.img
    }

    togglePicture = () => {
        const { isClicked } = this.state;

        if (!isClicked) {
            this.setState({
                isClicked: true,
                img: this.props.imgClicked
            })
        }
        else {
            this.setState({
                isClicked: false,
                img: this.props.img
            })
        }
    }

    render() {
        return (
            <img onClick={this.togglePicture} src={this.state.img} alt="pic" />
        )
    }
}
