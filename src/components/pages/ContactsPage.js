import React, { Component } from 'react';

import Contacts from '../contactComponent/Contacts';
import AddContact from '../contactComponent/AddContact';

class ContactsPage extends Component {
  render() {
    return (
      <div className="container row">
        <Contacts />
      </div>
    );
  }
}

export default ContactsPage;
