import React, {Component} from 'react';
import SignInForm from './sign_in_form';
import {connect} from 'react-redux';
import {signIn} from '../../actions';

class SignIn extends Component{
    handleSignIn = values => {
        console.log('Sign In values:', values);

        this.props.signIn(values);
    }
    render(){
        return(
            <div>
                <h1 className="center">Sign In</h1>
                <div className="center">
                    <SignInForm onSubmit={this.handleSignIn} authError={this.props.error}/>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        error: state.user.signInError
    };
}

export default connect(mapStateToProps, {signIn})(SignIn);