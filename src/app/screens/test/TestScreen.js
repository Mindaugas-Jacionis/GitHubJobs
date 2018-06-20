import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';

import TestComponent from './TestComponent';
import { NAVIGATION } from '../../../constants';
import jobs from '../../../jobs';
import { connect } from '../../../utils';

// NOTE: screens can only be class that extend Component or PureComponent
class TestScreen extends React.PureComponent {
  componentDidMount() {
    console.log('Mounted', this.props.jobs);
  }

  onPress = () => {
    this.props.sampleAction();
    Navigation.push(this.props.componentId, {
      component: { name: `${NAVIGATION}.Search` }
    });
  }

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f3f7',
    flex: 1,
    alignItems: 'center',
  }
});

TestScreen.propTypes = {
  data: PropTypes.array,
  sampleAction: PropTypes.func.isRequired,
};

TestScreen.defaultProps = {
  data: [],
};

const enhance = connect(
  state => ({
    data: jobs.selectors.getData(state),
    jobs: jobs.selectors.getJobs(state),
  }),
  dispatch => ({
    sampleAction: bindActionCreators(jobs.actions.sampleAction, dispatch),
  }),
);

export default enhance(TestScreen);
