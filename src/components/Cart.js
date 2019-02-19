import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input, Spinner } from './common';
import DetailShow from './DetailShow';

class Cart extends Component {
  state = { details: [], barcode: '' };

  componentWillMount() {
    axios
      .get('https://api.myjson.com/bins/1hdff6')
      .then(response => this.setState({ details: response.data }));
  }

  renderDetails = () => {
    return this.state.details.map(detail => {
      if (this.state.barcode === detail.barcode_val) {
        return <DetailShow key={detail.barcode_val} detail={detail} />;
      }
    });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="123"
            label="Barcode"
            value={this.state.barcode}
            onChangeText={barcode => this.setState({ barcode })}
          />
        </CardSection>
        <View>{this.renderDetails()}</View>
      </Card>
    );
  }
}

export default Cart;
