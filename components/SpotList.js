import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SpotDetail from './SpotDetail';


class SpotList extends Component {
  state = { spots: [] }

  componentWillMount() {
    fetch('https://www.katchup.club/api/v1/spots')
    .then(response => response.json())
    .then(data => this.setState({ spots: data.slice(0, 10) }));

    // Just getting 10 spots for testing
  }

  renderSpots() {
    return this.state.spots.map(spot =>
      <SpotDetail key={spot.id} spot={spot} />);
  }

  render() {
    return (
      <ScrollView style={{ marginBotton: 50 }}>
        {this.renderSpots()}
      </ScrollView>
    );
  }
}

export default SpotList;
