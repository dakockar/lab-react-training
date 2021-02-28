import React, { Component } from 'react'
import profilesJson from "../data/berlin.json"


export default class FaceBook extends Component {

    state = {
        profiles: profilesJson
    }


    getCountries = () => {
        const countries = [];

        for (let profile of profilesJson) {
            if (!countries.includes(profile.country)) {
                countries.push(profile.country);
            }
        }

        // console.log(countries);
        return countries;
    }

    handleHighlight = (country) => {
        let clonedProfiles = JSON.parse(JSON.stringify(this.state.profiles));

        clonedProfiles.forEach(profile => {
            if (profile.country === country) {
                profile.color = "#8cdbe6";
            }
            else profile.color = "white";
        });

        this.setState({ profiles: clonedProfiles });
    }

    handleClear = () => {
        let clonedProfiles = JSON.parse(JSON.stringify(this.state.profiles));
        clonedProfiles.forEach(profile => profile.color = "white");

        this.setState({ profiles: clonedProfiles });
    }

    toggleShow = (index) => {
        const clonedProfiles = JSON.parse(JSON.stringify(this.state.profiles));
        let newProfile = clonedProfiles[index];

        newProfile.show ? newProfile.show = false : newProfile.show = true;

        this.setState({
            profiles: clonedProfiles
        })
    }

    handleSort = (type) => {
        const clonedProfiles = JSON.parse(JSON.stringify(this.state.profiles));

        clonedProfiles.sort((a, b) => {
            switch (type) {
                case "last": {
                    if (a.lastName < b.lastName) return -1;
                    if (a.lastName > b.lastName) return 1;
                    else return 0;
                }
                case "first": {
                    if (a.firstName < b.firstName) return -1;
                    if (a.firstName > b.firstName) return 1;
                    else return 0;
                }
                default: return null;
            }

        });

        this.setState({
            profiles: clonedProfiles
        })
    }

    handleSearch = (event) => {
        let term = event.target.value;
        // console.log(term);

        // let filteredProfiles = profilesJson.filter(profile => {
        //     return profile.firstName.includes(term) || profile.lastName.includes(term) || profile.country.includes(term)
        // })

        // search in the first three values of each profile object 
        let filteredProfiles = profilesJson.filter(profile => {
            // console.log(Object.values(profile));

            for (let i = 0; i < 3; i++) {
                // console.log(Object.values(profile)[i].includes(term));
                if (Object.values(profile)[i].toLowerCase().includes(term.toLowerCase())) return true;
            }
            return false;
        })


        this.setState({
            profiles: filteredProfiles
        })

    }



    render() {
        const { profiles } = this.state;

        return (
            <div>
                {
                    this.getCountries().map(country => {
                        return (
                            <button key={country} onClick={() => { this.handleHighlight(country) }} >{country}</button>
                        )
                    })
                }
                <button onClick={this.handleClear}>Clear Filter</button>
                <div>
                    <button onClick={() => { this.handleSort("last") }}>Sort By Last Name</button>
                    <button onClick={() => { this.handleSort("first") }}>Sort By First Name</button>
                </div>

                <input onChange={this.handleSearch} type="text" placeholder="search" />
                {
                    profiles.map((profile, index) => {
                        return (
                            <div className="fb-card" style={{ backgroundColor: profile.color }} key={index}>
                                <img className="fb-avatar" onClick={() => { this.toggleShow(index) }} src={profile.img} alt={profile.firstName} />

                                <div>
                                    <p><b>First name:</b> {profile.firstName}</p>
                                    <p><b>Last name:</b> {profile.lastName}</p>
                                    <p><b>Country:</b> {profile.country}</p>
                                    <p><b>Type:</b> {profile.isStudent ? "Student" : "Teacher"} </p>
                                </div>
                                {/* 
                                {
                                    profile.show &&
                                    <div>
                                        <p><b>First name:</b> {profile.firstName}</p>
                                        <p><b>Last name:</b> {profile.lastName}</p>
                                        <p><b>Country:</b> {profile.country}</p>
                                        <p><b>Type:</b> {profile.isStudent ? "Student" : "Teacher"} </p>
                                    </div>
                                } */}

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
