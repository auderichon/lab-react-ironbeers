import React, { Component } from 'react';
import DisplayOneBeer from '../Components/DisplayOneBeer';
import HeaderNav from '../Components/HeaderNav';
import apiHandler from '../api/apiHandler';

class BeerDetails extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const beerId = this.props.match.params.beerId;

    apiHandler
      .getOneBeer(beerId)
      .then((apiRes) => {
        this.setState({ beer: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

  render() {
    return (
      <div>
        <HeaderNav />
        <DisplayOneBeer beer={this.state.beer} />
      </div>
    );
  }
}

export default BeerDetails;
