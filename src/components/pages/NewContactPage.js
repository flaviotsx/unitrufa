import React, { Component } from 'react';

import AddContact from '../contactComponent/AddContact';

class NewContactPage extends Component {
  render() {
    return (
      <div className="container row">
        <AddContact />
      </div>
    );
  }
}

export default NewContactPage;
