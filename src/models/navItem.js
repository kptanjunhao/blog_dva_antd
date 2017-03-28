/**
 * Created by Tan on 2017/3/25.
 */

export default {

  namespace: 'navItem',

  state: {
    current: ["主页"],
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
    update(state, { payload: items } ){
      return { current: items };
    }
  },

};
