/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Dimensions, View} from 'react-native';

function App(): React.JSX.Element {
  const size = Dimensions.get('window');
  return (
    <View
      style={{
        backgroundColor: 'red',
        width: size.width,
        height: size.height,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'blue',
          aspectRatio: 16 / 9,
          alignSelf: 'stretch',
          margin: 24,
        }}
      />
    </View>
  );
}

export default App;
