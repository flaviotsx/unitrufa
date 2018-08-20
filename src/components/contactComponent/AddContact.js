import React, { Component } from 'react';
import uuid from 'uuid';

// Dependency Component
import TextInputGroup from '../layout/InputComponent/TextInputGroup';

// context
import { Consumer } from '../../context';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    // Clear State after adding contact
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/contacts');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container row">
              <div className="card large">
                <div className="card-content">
                  <div className="card-title">Add Contact</div>
                  <form
                    className="col s12 m12 l12"
                    onSubmit={this.onSubmit.bind(this, dispatch)}
                  >
                    <TextInputGroup
                      icon="account_circle"
                      id="name"
                      label="Name"
                      name="name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      icon="email"
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGroup
                      icon="phone"
                      id="phone"
                      label="Phone"
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <br />
                    <div className="row">
                      <input
                        type="submit"
                        className="btn btn-large brown col s12 m12 l12"
                        value="ADD CONTACT"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
