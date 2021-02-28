import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, FormFeedback, FormText } from "reactstrap";

export default class SignupPage extends Component {

    state = {
        emailState: "",
        passwordState: "",
        email: "",
        password: "",
        nationality: "",
        isSignedIn: false
    }


    validateEmail = (e) => {
        // regex for email validation
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailState = ""

        emailRegEx.test(e.target.value) ? emailState = "has-success" : emailState = "has-danger";

        this.setState({ emailState })
    }

    validatePassword = (e) => {
        const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        let passwordState = "";
        passRegEx.test(e.target.value) ? passwordState = "has-success" : passwordState = "has-danger";

        this.setState({ passwordState });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;
        let nationality = e.target.nationality.value;

        this.setState({
            emailState: "",
            passwordState: "",
            email,
            password,
            nationality,
            isSignedIn: true
        });

        e.target.email.value = "";
        e.target.password.value = "";
    }

    getGreeting = () => {
        switch (this.state.nationality) {
            case "English": return "Hello";
            case "German": return "Hallo";
            case "French": return "Bonjour";
        }
    }

    logout = () => {
        this.setState({
            isSignedIn: false
        })
    }

    render() {

        const { emailState, passwordState } = this.state;

        return (
            <div className="signup-form">

                {
                    this.state.isSignedIn
                        ? (
                            <div>
                                <div> {this.getGreeting()} </div>
                                <div>Your email address is: {this.state.email} </div>
                                <button onClick={this.logout}>Logout</button>
                            </div>
                        )
                        : (
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input onChange={this.validateEmail}
                                        valid={emailState === 'has-success'}
                                        invalid={emailState === 'has-danger'}
                                        type="email" name="email" id="email" placeholder="email" />
                                    <FormFeedback valid>Sweet! that email is valid</FormFeedback>
                                    <FormFeedback invalid="true">email is invalid</FormFeedback>
                                    <FormText>Please enter a valid email</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input onChange={this.validatePassword}
                                        valid={passwordState === 'has-success'}
                                        invalid={passwordState === 'has-danger'}
                                        type="password" name="password" id="password" placeholder="password" />
                                    <FormFeedback valid>strong password!</FormFeedback>
                                    <FormFeedback invalid="true">Your password is not strong enough</FormFeedback>
                                    <FormText>password must be at least 8 characters, and include at least 1 letter and 1 number </FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="nationality">Nationality</Label>
                                    <Input type="select" name="select" id="nationality">
                                        <option>German</option>
                                        <option>English</option>
                                        <option>French</option>
                                    </Input>
                                </FormGroup>

                                <Button>Submit</Button>
                            </Form>
                        )
                }
            </div>
        )
    }
}
