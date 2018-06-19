import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import jobs from '../../jobs';
import TestComponent from './TestComponent';

// NOTE: screens can only be class that extend Component or PureComponent
// class TestScreen extends React.Component {
class TestScreen extends React.PureComponent {
  onPress = () => {
    this.props.sampleAction();
  }

  render() {
    const { jobsList } = this.props;

    return (
      <View style={styles.container}>
        <TestComponent />
        <Text>{`Hello World! ${JSON.stringify(jobsList)}`}</Text>
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
  jobsList: PropTypes.array,
};

TestScreen.defaultProps = {
  jobsList: [],
};

const enhance = connect(
  state => ({
    jobsList: jobs.selectors.getJobs(state),
  }),
  dispatch => ({
    sampleAction: bindActionCreators(jobs.actions.sampleAction, dispatch),
  }),
  null,
  {"withRef" : true}
);

export default enhance(TestScreen);
