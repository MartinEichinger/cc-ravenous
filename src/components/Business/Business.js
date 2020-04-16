import React from 'react';
import './Business.css';

class Business extends React.Component {
  constructor(props) {
    super(props);

    this.hRef = `https://www.google.com/maps/place/${this.props.business.address} ${this.props.business.zipCode} ${this.props.business.city}`;
    //this.hRef = `https://www.google.com/maps/place/${this.props.business.name} ${this.props.business.zipCode} ${this.props.business.city}`;
  }

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a href={this.props.business.url} target='_blank'>
            <img src={this.props.business.imageSrc} alt=''/>
          </a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <a href={this.hRef} target='_blank'>{this.props.business.address}</a>
            <a href={this.hRef} target='_blank'>{this.props.business.city}</a>
            <a href={this.hRef} target='_blank'>{this.props.business.state + this.props.business.zipCode}</a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
