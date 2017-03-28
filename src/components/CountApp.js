import React from 'react';
import { connect } from 'dva';

const CountApp = ({count, dispatch}) => {
  return (
    <div>
      <div>Record: {count.record}</div>
      <div>Current: {count.current}</div>
      <div><button onClick={() => { dispatch({type: 'count/add'})}}>+</button></div>
      <div><button onClick={() => { dispatch({type: 'count/update'})}}>Refresh</button></div>
    </div>
  );
};

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(CountApp);
