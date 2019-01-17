import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovieQuote} from '../actions';
import axios from 'axios'; 



class MovieQuote extends Component {
    componentDidMount(){
        this.props.getMovieQuote();
    }
    render(){
        return (
            <div className="center">
                <h1 className="center">Movie Quote</h1>
                <h5>{this.props.quote}</h5>
                <div className="center">
                    <button className="btn btn-large blue darken-2"onClick={this.props.getMovieQuote}>New Quote</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {getMovieQuote })(MovieQuote);