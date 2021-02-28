import React, { Component } from 'react'
import Rating from './Rating';

export default class DriverCard extends Component {
    render() {

        const { img, name, rating, car } = this.props;

        return (
            <div className="driver-card">
                <div className="circle-img">
                    <img src={img} alt={name} />
                </div>
                <div className="driver-info" >
                    <div className="driver-name">{name}</div>
                    <Rating>{rating}</Rating>
                    <div>{car.model} - {car.licensePlate}</div>
                </div>
            </div>
        )
    }
}
