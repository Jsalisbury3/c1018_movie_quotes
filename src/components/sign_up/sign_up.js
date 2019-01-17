import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignupForm from './sign_up_form';
import {signUp} from '../../actions';

class SignUp extends Component {
    handleSignUp=(values)=> {
        console.log('Sign Up Values:', values);

        this.props.signUp(values);
    }
    render(){
        return(
            <div>
                <h1 className="center">Sign Up</h1>
                <SignupForm onSubmit={this.handleSignUp}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, {
    signUp: signUp
})(SignUp)