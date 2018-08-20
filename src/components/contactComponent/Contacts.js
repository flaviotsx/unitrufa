import React, { Component } from 'react';

// Dependency Component
import Contact from './Contact';

// context
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="container row">
                <h1 className="brown-text">
                  <span className="amber-text">Contact</span>
                  List
                </h1>
                {contacts.map(contact => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
