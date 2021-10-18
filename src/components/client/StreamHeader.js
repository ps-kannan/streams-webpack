import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const StreamHeader = () => {
    return(
        <div className="ui seondary pointing menu">
            <Link to="/streamapp" className="item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/streamapp" className="item">
                    All Streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default StreamHeader;