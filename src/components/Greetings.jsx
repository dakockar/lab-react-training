import React, { Component } from 'react'

export default class Greetings extends Component {


    getGreeting(lang) {
        switch (lang) {
            case "de": return "Hallo";
            case "en": return "Hello";
            case "fr": return "Bonjour";
            case "es": return "Hola";
            default: return null;
        }
    }


    render() {
        return (
            <div>
                {this.getGreeting(this.props.lang)} {this.props.children}
            </div>
        )
    }
}
