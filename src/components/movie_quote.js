import React, { Component } from 'react';
import auth from '../hoc/auth';
import axios from 'axios'; 


class MovieQuote extends Component {
    render(){
        return (
            <div className="center">
                <h1 className="center">Movie Quote</h1>
                <h5>Movie quote: Die lizard boih</h5>
            </div>
        );
    }
}


export default auth(MovieQuote);