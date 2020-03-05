import React, { useState } from 'react';


const RegForm = () => {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPasword: '',
        onSubmit: false,
    })

    const onChangeHandler = event => {
        event.preventDefault();
        console.log(state);
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }



    let message;
    if (state.submitted) {
        message =
            <div>
                {state.firstName},
                    {state.lastName},
                    {state.email},
                    {state.password},
                    {state.confirmPasword},
                </div>;
    }




    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(state);
        setState({
            ...state,
            onSubmit: true
        })



    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <section>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" onChange={onChangeHandler} />
                        {state.firstName.length < 3 ? <p>First name must be at least 3 characters.</p> : <p></p>}
                        <br />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" onChange={onChangeHandler} />
                        {state.lastName.length < 3 ? <p>Last name must be at least 3 characters.</p> : <p></p>}
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" onChange={onChangeHandler} />
                        {state.email.length < 5 ? <p>Email must be at least 5 characters.</p> : <p></p>}
                        <br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" onChange={onChangeHandler} />
                        {state.password.length < 8 ? <p>Password name must be at least 8 characters.</p> : <p></p>}
                        <br />
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                        {state.password !== state.confirmPassword ? <p>Passwords do not match.</p> : <p></p>}
                        <br />
                        <input type="submit" />

                    </section>
                </fieldset>
            </form>
            <br />
            {message}
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