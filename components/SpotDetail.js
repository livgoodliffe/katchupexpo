import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from './common';


const SpotDetail = ({ spot }) => {

  const { name, address, image, id } = spot;

  const { headerContentStyle, headerTextStyle, imageStyle } = styles;

  return (
    <Card>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
          <Text>{address}</Text>
        </View>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  }
};

export default SpotDetail;
