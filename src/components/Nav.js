/**
 * Created by Tan on 2017/3/28.
 */
import React from 'react';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import request from '../utils/request';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = ({navItem, dispatch}) => {
  if (navItem.item.length < 1) {
    var result = request("http://localhost:8080/test").then(
      ({data})=>{
        if(data==null){
          return;
        }
        console.log(data.data);
        dispatch({
          type: 'navItem/update',
          payload: data.data,
          current: navItem.current,
        });
      });
    return (<Menu/>);
  }

  var item = [];
  for (var i = 0; i < navItem.item.size; i++) {
    item.push(
      <Menu.Item key={navItem.item[i]}>
        <Icon type="mail" />navItem.item[i]
      </Menu.Item>
    );
  }

  var handleClick = (e) => {
    console.log(e);
    dispatch({
      type: 'navItem/update',
      payload: navItem.item,
      current: e.key,
    });
  }

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[navItem.current]}
      mode="horizontal"
    >
      { item }
      <Menu.Item key="aa">
        <Icon type="app" />aa
      </Menu.Item>
    </Menu>
  );
};

function mapStateToProps(state) {
  return { navItem: state.navItem };
}

export default connect(mapStateToProps)(Nav);
