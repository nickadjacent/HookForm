import React, { useState } from 'react';


const RegForm = props => {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPasword: '',
    })

    const onChangeHandler = event => {
        event.preventDefault();
        console.log(state);
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(state);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <section>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" onChange={onChangeHandler} />
                        <br />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" onChange={onChangeHandler} />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" onChange={onChangeHandler} />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" onChange={onChangeHandler} />
                        <br />
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                        <br />
                        <input type="submit" />
                    </section>
                </fieldset>
            </form>
            <br />
            <h3>Your Form Data</h3>
            <div>
                <p>First Name: {state.firstName}</p>
                <p>Last Name: {state.lastName}</p>
                <p>Email: {state.email}</p>
                <p>Password: {state.password}</p>
                <p>Confirm Password: {state.confirmPassword}</p>
            </div>
        </div>
    )
}

export default RegForm;