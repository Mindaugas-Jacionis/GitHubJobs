import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';

import TestComponent from './TestComponent';
import { NAVIGATION } from '~/constants';
import jobs from '~/jobs';
import { connect } from '~/utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f3f7',
    flex: 1,
    alignItems: 'center',
  },
});

// NOTE: screens can only be class that extend Component or PureComponent
class TestScreen extends React.PureComponent {
  onPress = () => {
    const { componentId } = this.props;

    Navigation.push(componentId, {
      component: { name: `${NAVIGATION}.Search` },
    });
  };

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <TestComponent />
        <Text>{`Hello World! ${JSON.stringify(data)}`}</Text>
        <TouchableOpacity onPress={this.onPress}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

TestScreen.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  componentId: PropTypes.string.isRequired,
};

TestScreen.defaultProps = {
  data: [],
};

const enhance = connect(state => ({
  data: jobs.selectors.getData(state),
  jobs: jobs.selectors.getJobs(state),
}));

export default enhance(TestScreen);
