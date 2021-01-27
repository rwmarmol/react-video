import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components & Containers
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
