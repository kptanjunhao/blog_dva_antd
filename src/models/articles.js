/**
 * Created by Tan on 2017/5/24.
 */
export default {

  namespace: 'articles',

  state: {
    items:[],
  },

  reducers: {
    update(state, action) {
      return {
        ...state, ...action.payload
      };
    },
  },

};
