import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import TestComponent from './TestComponent';

// NOTE: screens can only be class that extend Component or PureComponent
// class TestScreen extends React.Component {
class TestScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TestComponent />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f3f7',
    flex: 1,
    alignItems: 'center',
  }
});

export default TestScreen;
