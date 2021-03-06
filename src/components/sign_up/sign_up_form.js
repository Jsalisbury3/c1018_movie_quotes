import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/input';

const SignUpForm = props => {
    const { onSubmit, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name="email" label="Email" component={Input}/>
                <Field name="password" label="password" size="m6 s12" type="password" component={Input}/>
                <Field name="confirmPasd" label="Confirm Password" size="m6 s12" type="password" component={Input}/>
            </div>
            <div className="row">
                <div className="center col s6">
                    <button className="btn black" type="button">Reset</button>
                </div>
                <div className="center col s6">
                    <button className="btn blue lighten-2">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

function validate({email, password, confirmPassword}){
    const errors = {}

    if(!email){
        errors.email = 'plrase enter your email';
    }
    if(!password){
        errors.password = 'Please create a password'
    }
    if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match '
    }

    return errors;
}

export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpForm);