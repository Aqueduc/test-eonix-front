import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './configureStore';
import Home from './containers/HomeContainer';
import { homeContainerReducer } from "./reducers.js"
// Create redux store with history
const store = configureStore(homeContainerReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <h1>Clic Counter </h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={() => (<h2>Page introuvable</h2>)} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
