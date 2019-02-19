import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

const DetailShow = ({ detail }) => {
  const { barcode_val, product_name, price, calorie, weight, expiry } = detail;

  return (
    <View>
      <Card>
        <CardSection>
          <View>
            <Text style={styles.barcodeStyle}>{barcode_val}</Text>
            <Text style={styles.productStyle}>{product_name}</Text>
            <Text style={styles.priceStyle}>Rs {price}</Text>
            <Text style={styles.pStyle}>PRODUCT DETAILS</Text>
            <View style={styles.detailStyle}>
              <Text>Weight</Text>
              <Text style={styles.rightStyle}>{weight} Kg</Text>
            </View>
            <View style={styles.detailStyle}>
              <Text>Calories</Text>
              <Text style={styles.rightStyle}>{calorie} kcal</Text>
            </View>
            <View style={styles.detailStyle}>
              <Text>Expiry</Text>
              <Text style={styles.rightStyle}>{expiry}</Text>
            </View>
            <View style={styles.detailLowStyle}>
              <Text>Price</Text>
              <Text style={styles.rightStyle}>Rs {price}</Text>
            </View>
          </View>
        </CardSection>
      </Card>
      <View style={styles.bottomStyle} />
      <Card>
        <CardSection>
          <View style={styles.bottomCardStyle}>
            <Text style={styles.priceBottomStyle}>Rs {price}</Text>
          </View>

          <Button style={styles.buttonStyle}>PAY</Button>
        </CardSection>
      </Card>
    </View>
  );
};

const styles = {
  barcodeStyle: {
    color: 'grey',
    paddingBottom: 5
  },
  productStyle: {
    fontSize: 18,
    paddingBottom: 7
  },
  priceStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20
  },
  pStyle: {
    color: 'grey',
    paddingBottom: 5
  },
  detailStyle: {
    flexDirection: 'row',
    paddingBottom: 5
  },
  detailLowStyle: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  rightStyle: {
    marginLeft: 'auto',
    paddingLeft: 240
  },
  bottomStyle: {
    height: 300
  },
  bottomCardStyle: {
    flexDirection: 'row'
  },
  priceBottomStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 150
  },
  buttonStyle: {
    width: 50,
    backgroundColor: '#007aff'
  }
};

export default DetailShow;
