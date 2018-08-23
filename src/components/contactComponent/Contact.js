import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// context
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: false,
    changeArrowIcon: true
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    // these props are made by getting data from context
    // thats called by contacts fiiling this Contact Component
    const { id, name, email, phone } = this.props.contact;

    const { showContactInfo, changeArrowIcon } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="col s12 m12 l12">
              <div className="card">
                <div className="card-content">
                  <h5
                    className="collection-header"
                    style={{ cursor: 'poiter' }}
                    onClick={() => {
                      this.setState({
                        showContactInfo: !this.state.showContactInfo,
                        changeArrowIcon: !this.state.changeArrowIcon
                      });
                    }}
                  >
                    {name}
                    {changeArrowIcon ? (
                      <i className="material-icons">arrow_drop_down</i>
                    ) : (
                      <i className="material-icons">arrow_drop_up</i>
                    )}
                    <i
                      className="material-icons red-text"
                      style={{
                        float: 'right',
                        cursor: 'pointer'
                      }}
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    >
                      clear
                    </i>

                    <Link to={`/contact/edit/${id}`}>
                      <i
                        className="material-icons brown-text"
                        style={{
                          float: 'right',
                          cursor: 'pointer',
                          marginRight: '1rem'
                        }}
                      >
                        edit
                      </i>
                    </Link>
                  </h5>
                  {showContactInfo ? (
                    <ul className="collection">
                      <li className="collection-item">{email}</li>
                      <li className="collection-item">{phone}</li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
