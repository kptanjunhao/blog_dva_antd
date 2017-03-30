/**
 * Created by Tan on 2017/3/25.
 */

export default {

  namespace: 'navItem',

  state: {
    item: [],
    current: ""
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'save' });
  //   },
  // },

  reducers: {
    update(state, { payload: items,current: current } ){
      return { item: state.item.concat(items), current: current };
    }
  },

};
