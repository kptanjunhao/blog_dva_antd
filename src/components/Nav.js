/**
 * Created by Tan on 2017/3/28.
 */
import React from 'react';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = ({navItem, dispatch}) => {
  var item = [];
  for(var i=0;i<navItem.current.length;i++){
    item.push(
      <div key={i}>{navItem.current[i]}</div>
    );
  }
  return (
    <div>
      <div>Hello: { item }</div>
      <div><button onClick={() => {
        dispatch({
          type: 'navItem/update',
          payload: ["主页","Hello"]
        })
      }}>Refresh</button></div>
    </div>
  );
};

function mapStateToProps(state) {
  return { navItem: state.navItem };
}

export default connect(mapStateToProps)(Nav);
