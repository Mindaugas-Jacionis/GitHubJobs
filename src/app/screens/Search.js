import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import jobs from '../../jobs';
import { connect } from '../../utils';

class Search extends React.Component {
  // TODO:  Remove this once search is implemented
  componentDidMount() {
    this.props.getJobs();
  }

  render() {
    const { jobs } = this.props;
    return (
      <KeyboardAvoidingView>
        <Text>Hellow Search</Text>
        <Text>{JSON.stringify(jobs)}</Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

});

Search.propTypes = {
  jobsList: PropTypes.array,
  getJobs: PropTypes.func.isRequired
};

Search.defaultProps = {
  jobs: [],
};

const enhance = connect(
  state => ({
    jobs: jobs.selectors.getJobs(state),
  }),
  dispatch => ({
    getJobs: bindActionCreators(jobs.actions.getJobs, dispatch),
  }),
);

export default enhance(Search)
