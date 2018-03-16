import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component{
  render(){
    return (
      <div className='BusinessList'>
        {
          this.props.businesses.map(business => {
          return <Business business={business}/>;
        }) //map through the array of businesses and return Business component for each businesss
        }
      </div>
    );
  }
}

export default BusinessList;
