import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StreamCreate from './stream/StreamCreate';
import StreamDelete from './stream/StreamDelete';
import StreamEdit from './stream/StreamEdit';
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';
import StreamHeader from './StreamHeader';


const ClientApp = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <StreamHeader/>
                    <Switch>
                        <Route path="/" exact >
                            <StreamList/>
                        </Route>
                        <Route path="/new" exact >
                            <StreamCreate/>
                        </Route>
                        <Route path="/delete" exact >
                            <StreamDelete/>
                        </Route>
                        <Route path="/edit" exact >
                            <StreamEdit/>
                        </Route>
                        <Route path="/show" exact >
                            <StreamShow/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default ClientApp;