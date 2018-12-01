import React from 'react';
import { Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default process.env.STORYBOOK_ENABLED ? require('./storybook').default : App;
