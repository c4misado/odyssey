import React, { useState } from "react";


const SignUp = () => {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("monPassw0rd");
    const [verifPassword, setVerifPassword] = useState("monPassw0rd");
    const [name, setName] = useState("James");
    const [lastname, setLastname] = useState("Bond");
    const [flash, setFlash] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/auth/signup", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                lastname: lastname,
            }),
        })
            .then((res) => res.json())
            .then(
                (res) => setFlash(res.flash),
                (err) => setFlash(err.flash)
            );
    };

    return (
        <div>
            <h1>{flash}</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} />
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} />
                <input onChange={(e) => setVerifPassword(e.target.value)} type="password" name="verification password" value={verifPassword} />
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} />
                <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" value={lastname} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
export default SignUp;


// const {flash, ...newUser} = req.body;
// import './SignUp.css';

// export default class SignUp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             values: {
//                 email: "mon@email.com",
//                 password: "monPassw0rd",
//                 // passwordCheck: "",
//                 name: "James",
//                 lastname: "Bond",
//             },
//             flash: ''
//         }
//         this.updateEmailField = this.updateEmailField.bind(this);
//         this.updatePasswordField = this.updatePasswordField.bind(this);
//         this.updatePasswordCheckField = this.updatePasswordCheckField.bind(this);
//         this.updateFirstNameField = this.updateFirstNameField.bind(this);
//         this.updateLastNameField = this.updateLastNameField.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }



//     updateValues(event) {
//         this.setState({
//             values: {
//                 email: event.target.email,
//                 password: event.target.password,
//                 name: event.target.name,
//                 lastname: event.target.lastname
//             }
//         });
//     }

//     updateEmailField(event) {
//         this.setState({ values: { email: event.target.email } });
//     }

//     updatePasswordField(event) {
//         this.setState({ values: { password: event.target.value } });
//     }

//     updatePasswordCheckField(event) {
//         this.setState({ values: { passwordCheck: event.target.value } });
//     }

//     updateFirstNameField(event) {
//         this.setState({ values: { name: event.target.value } });
//     }

//     updateLastNameField(event) {
//         this.setState({ lastname: event.target.value });
//     }

//     // handleSubmit = (err, res) => {
//     //     if (this.state.password === this.state.passwordCheck) {
//     //         fetch("/auth/signup",
//     //             {
//     //                 method: 'POST',
//     //                 headers: new Headers({
//     //                     'Content-Type': 'application/json'
//     //                 }),
//     //                 body: JSON.stringify(this.state),
//     //             })
//     //             .then(res => res.json())
//     //             .then(
//     //                 res => this.setState({ "flash": res.flash }),
//     //                 err => this.setState({ "flash": err.flash })
//     //             )
//     //         if (err)
//     //             res.status(500).json({ flash: err.message });
//     //         else
//     //             res.status(200).json({ flash: "User has been signed up!" });
//     //     } else {
//     //         alert("password check does not match!")
//     //     }
//     // }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         fetch("/auth/signup",
//             {
//                 method: 'POST',
//                 headers: new Headers({
//                     'Content-Type': 'application/json'
//                 }),
//                 body: JSON.stringify(this.state.values),
//             })
//             .then(res => res.json())
//             .then(
//                 res => this.setState({ "flash": res.flash }),
//                 err => this.setState({ "flash": err.flash })
//             )
//         // if (this.state.password === this.state.passwordCheck) {
//         //     fetch("/auth/signup",
//         //         {
//         //             method: 'POST',
//         //             headers: new Headers({
//         //                 'Content-Type': 'application/json'
//         //             }),
//         //             body: JSON.stringify(this.state),
//         //         })
//         //         .then(res => res.json())
//         //         .then(
//         //             res => this.setState({ "flash": res.flash }),
//         //             err => this.setState({ "flash": err.flash })
//         //         )
//         // } else {
//         //     alert("password check does not match!")
//         // }
//     }
//     // onChange={this.updateValues}
//     // onChange={this.updatePasswordField}
//     // {this.updateFirstNameField}
//     // {this.updateLastNameField}
//     render() {
//         return (
//             <div className="SignUp">
//                 <h1>{JSON.stringify(this.state.values, 1, 1)}</h1>
//                 <h2>{this.state.flash}</h2>
//                 <form onSubmit={this.handleSubmit} onChange={this.updateValues}>
//                     <input type="email" name="email"/>
//                     <input type="text" name="password" />
//                     {/* <input type="text" name="passwordCheck" onChange={this.updatePasswordCheckField} /> */}
//                     <input type="text" name="name" />
//                     <input type="text" name="lastname" />
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div>
//         );
//     }
// }