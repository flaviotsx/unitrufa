import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Header from './components/layout/headerComponent/Header';
import Footer from './components/layout/footerComponent/Footer';

// Components Pages
import HomePage from './components/pages/HomePage';
import ContactsPage from './components/pages/ContactsPage';
import NewContactPage from './components/pages/NewContactPage';

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
          <div>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contacts" component={ContactsPage} />
            <Route exact path="/contact/add" component={NewContactPage} />
            <Footer />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
