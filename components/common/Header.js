import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle} >
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 0,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

export { Header };
