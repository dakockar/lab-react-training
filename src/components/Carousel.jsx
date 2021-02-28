import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        images: this.props.imgs,
        img: "",
        index: 0
    }

    componentDidMount() {
        const { images, index } = this.state;
        this.setState({ img: images[index] })
    }

    decrement = () => {

        const { index, images } = this.state;
        let newIndex = index;

        if (newIndex < images.length - 1) newIndex++;
        else newIndex = 0;

        this.setState({ index: newIndex, img: images[newIndex] })
    }

    increment = () => {
        const { index, images } = this.state;
        let newIndex = index;

        if (newIndex > 0) newIndex--;
        else newIndex = images.length - 1;

        this.setState({ index: newIndex, img: images[newIndex] })
    }

    render() {
        const { img } = this.state;
        return (
            <div>
                <img src={img} alt="people" />
                <button onClick={this.decrement} >left</button>
                <button onClick={this.increment} >right</button>
            </div>
        )
    }
}
