import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <section className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <img
                // src="https://materializecss.com/images/sample-1.jpg"
                src="http://validadedetudo.com/wp-content/uploads/2017/08/VALIDADE-DE-TRUFAS-DE-CHOCOLATE-2.jpg"
                className="brown"
                style={{ height: '70vh' }}
                alt="lugar1"
              />
              <span className="card-title amber-text">
                Contact to everyone you want to.
              </span>
            </div>

            <div className="card-content">
              <p>
                This software is to maintain actualized the contacts within
                sectors in the company.
              </p>
            </div>

            <div className="card-action">
              <Link to="/contacts">SEE THE CONTACTS</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Homepage;
