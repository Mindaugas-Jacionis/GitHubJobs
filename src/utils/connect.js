import { connect as reduxConnect } from 'react-redux';

const connect = (mapProps = null, mapActions = null) =>
  reduxConnect(mapProps, mapActions, null, { withRef: true });

export default connect;
