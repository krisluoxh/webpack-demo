'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/webpack.jpeg';
import './search.less';

class Search extends React.Component {
    render() {
        return <div className = "search-text" >
                Search Text TTT<img src={ logo } />
            </div>;
    }
}

ReactDOM.render( <
    Search / > ,
    document.getElementById('root')
);