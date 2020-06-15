import React from 'react';
// import './SignUp.css';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd",
            passwordCheck: "",
            firstname: "James",
            lastname: "Bond"
        }
        this.updateEmailField = this.updateEmailField.bind(this);
        this.updatePasswordField = this.updatePasswordField.bind(this);
        this.updatePasswordCheckField = this.updatePasswordCheckField.bind(this);
        this.updateFirstNameField = this.updateFirstNameField.bind(this);
        this.updateLastNameField = this.updateLastNameField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateEmailField(event) {
        this.setState({ email: event.target.value });
    }

    updatePasswordField(event) {
        this.setState({ password: event.target.value });
    }

    updatePasswordCheckField(event) {
        this.setState({ passwordCheck: event.target.value });
    }

    updateFirstNameField(event) {
        this.setState({ firstname: event.target.value });
    }

    updateLastNameField(event) {
        this.setState({ lastname: event.target.value });
    }

    handleSubmit = (e) => {
        if(this.state.password === this.state.passwordCheck) {
            e.preventDefault();
            let obj = JSON.stringify(this.state,1,1);
            console.log(obj);
        } else {
            alert("password check does not match!")
        }

    }

    render() {
        return (
            <div className="SignUp">
                <h1>{JSON.stringify(this.state,1,1)}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" onChange={this.updateEmailField} />
                    <input type="text" name="password" onChange={this.updatePasswordField} />
                    <input type="text" name="passwordCheck" onChange={this.updatePasswordCheckField}/>
                    <input type="text" name="firstName" onChange={this.updateFirstNameField} />
                    <input type="text" name="lastName" onChange={this.updateLastNameField} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}