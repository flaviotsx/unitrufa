import React, { Component } from 'react';
import axios from 'axios';

// Dependency Component
import TextInputGroup from '../layout/InputComponent/TextInputGroup';

// context
import { Consumer } from '../../context';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onSubmit = async (dispatch, e) => {
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

    const updContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    // Clear State after editing contact
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
                        value="UPDATE CONTACT"
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

export default EditContact;
