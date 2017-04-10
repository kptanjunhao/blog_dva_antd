/**
 * Created by Tan on 2017/4/7.
 */
export default {

  namespace: 'nav',

  state: {
    items:["主页","文章","关于"],
    artCates:[],
    current:"主页",
  },

  reducers: {
    update(state, action) {
      return {
        ...state, ...action.payload
      };
    },
  },

};
