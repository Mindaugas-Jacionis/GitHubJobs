import React from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import jobs from '~/jobs';
import { connect } from '~/utils';

class Search extends React.Component {
  // TODO:  Remove this once search is implemented
  componentDidMount() {
    const { getJobs } = this.props;
    getJobs();
  }

  render() {
    const { jobsList } = this.props;
    return (
      <KeyboardAvoidingView>
        <Text>Hellow Search</Text>
        <Text>{JSON.stringify(jobsList)}</Text>
      </KeyboardAvoidingView>
    );
  }
}

Search.propTypes = {
  jobsList: PropTypes.arrayOf(PropTypes.shape({})),
  getJobs: PropTypes.func.isRequired,
};

Search.defaultProps = {
  jobsList: [],
};

const enhance = connect(
  state => ({
    jobsList: jobs.selectors.getJobs(state),
  }),
  dispatch => ({
    getJobs: bindActionCreators(jobs.actions.getJobs, dispatch),
  })
);

export default enhance(Search);
