/**
 * Created by Tan on 2017/3/28.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import request from '../utils/request';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const Nav = ({ nav, indexHandleClick, dispatch }) => {
  var handleClick = (e) => {
    dispatch({
      type: 'nav/update',
      payload: {
        current: e.key,
      },
    });
    indexHandleClick(e.key);
  };

  if(nav.artCates == undefined||nav.artCates.length == 0){
    request("http://localhost:8080/getAllCategories").then(
      ({data}) => {
        var artCates = data.data
        console.log(artCates);
        if (data == undefined) {
          artCates = [{
            category_id:-1,
            name:"暂无数据"
          }]
        }
        dispatch({
          type: 'nav/update',
          payload: {
            artCates: artCates
          },
        });
      });
  }


  var getItems = () => {
    var navItems = [];
    for(var i=0;i<nav.items.length;i++){
      if(nav.items[i] == "文章"){
        var subItems = []
        for(var j=0;j<nav.artCates.length;j++){
          subItems.push(
            <Menu.Item key={"文章:"+j}>{ nav.artCates[j].name }</Menu.Item>
          );
        }
        navItems.push(
          <SubMenu title={nav.items[i]} key="文章">
            { subItems }
          </SubMenu>
        );
      }else {
        navItems.push(
          <Menu.Item key={ nav.items[i] }>
            <Icon type="app"/>{nav.items[i]}
          </Menu.Item>
        );
      }
    }
    return navItems;
  };
  return(
      <Menu
        onClick={handleClick}
        selectedKeys={[nav.current]}
        mode="horizontal"
      >
        { getItems() }
      </Menu>
  );
};

export default Nav;
