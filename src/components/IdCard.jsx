import React, { Component } from 'react'

export default class IdCard extends Component {


    formatHeight = (height) => {
        let formattedHeight = height / 100 + "m";
        // console.log(formattedHeight);
        return formattedHeight
    }

    formatBirthDate = (birthDate) => {
        // console.log(birthDate);

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        let year = birthDate.getFullYear();
        let month = months[birthDate.getMonth() - 1];
        let date = birthDate.getDate();
        let day = days[birthDate.getDay()]

        return `${day} ${month} ${date} ${year}`;
    }


    render() {

        let { picture, firstName, lastName, gender, height, birth } = this.props;

        return (
            <div className="id-card">
                <div>
                    <img src={picture} alt="pic" />
                </div>
                <div>
                    <div><b>First name: </b> {firstName}</div>
                    <div><b>Last name: </b> {lastName}</div>
                    <div><b>Gender: </b> {gender}</div>
                    <div><b>Height: </b> {this.formatHeight(height)}</div>
                    <div><b>Birth: </b> {this.formatBirthDate(birth)}</div>
                </div>
            </div>
        )
    }
}
