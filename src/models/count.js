
export default {

  namespace: 'count',

  state: {
    record: 0,
    current: 0,
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
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1};
    },
    update(state){
      return { ...state, current: 100 };
    }
  },

};
