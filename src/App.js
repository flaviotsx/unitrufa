import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/layout/headerComponent/Header';
import Footer from './components/layout/footerComponent/Footer';

// Components Contacts
import AddContact from './components/contactComponent/AddContact';
import Contacts from './components/contactComponent/Contacts';
import EditContact from './components/contactComponent/EditContact';

// Components Pages
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';

// Includes
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// Context
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <div
            style={{
              display: 'flex',
              minHeight: '100vh',
              flexDirection: 'column'
            }}
          >
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
