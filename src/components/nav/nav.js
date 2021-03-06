import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import bookBirdLogo from './images/logo-transparent.png'
import {Link} from 'react-router-dom';
import {signOut} from '../../actions';
import './nav.scss';
import SideNav from './side_nav';

class Nav extends Component {
    state = {
        commonLinks: [
            {
                text: 'home',
                to: '/'
            },
            {
                text: 'About Us',
                to: '/about'
            },
            {
                text:'Movie List',
                to: '/movie-list'
            }
        ],
        noAuthLinks: [
            {
                text: 'Sign In',
                to: '/sign-in'
            },
            {
                text: 'Sign Up',
                to: '/sign-up'
            }
        ],
        authLinks: [
            {
                text: 'Private Movie List',
                to: '/movie-list/private'
            },
            {
                text: 'Movie quotes',
                to: '/movie-quotes'
            }
        ]
    }

    buildLink(link){
        return (
            <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }

    handleSignOut = () =>{
        console.log('sign out lizard boih');
        this.props.signOut();
    }

    renderLinks(){
        const { authLinks, commonLinks, noAuthLinks} = this.state;
        const {auth} = this.props;

        let links = [...commonLinks];

        if(auth){
            links = [...links, ...authLinks].map(this.buildLink);

            links.push(
                <li className="sign-out"key="sign-out">
                    <button onClick={this.handleSignOut}className="btn blue">Sign Out</button>
                </li>
            )
        } else {
            links = [...links, ...noAuthLinks].map(this.buildLink);
        }

        return links;
    }
    render(){
        const links = this.renderLinks();
        return (
            <Fragment>
                <nav className="blue darken-2">
                    <Link className="brand-logo" to="/">Movie Quote</Link>
                    <a href="#" data-target="side-nav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <img className="birdLogo"src={bookBirdLogo} alt=""/>
                    <ul className="right hide-on-med-and-down">
                        {links}
                    </ul>
                </nav>
                <SideNav links={links}/>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signOut: signOut
})(Nav);