/**
 * Created by Tan on 2017/3/28.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import request from '../utils/request';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends React.Component{
  constructor(){
    super()
    this.state = {
      items:["主页"],
      artCates:[],
      current:"主页",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    var result = request("http://localhost:8080/test").then(
      ({data}) => {
        if (data == null) {
          return;
        }
        console.log(data.data)
        this.setState({
          items: this.state.items.concat(["文章列表"]),
          artCates: data.data,
          current: this.state.current,
        })
      });
  }
  handleClick(e){
    this.setState({
      current:e.key
    })
  }
  getItems(){
    var navItems = [];
    for(var i=0;i<this.state.items.length;i++){
      if(this.state.items[i] == "文章列表"){
        var subItems = []
        for(var j=0;i<this.state.artCates.length;j++){
          subItems.push(
            <Menu.Item>{ this.state.artCates[j] }</Menu.Item>
          );
        }
        navItems.push(
          <SubMenu title={this.state.items[i]}>
            { subItems }
          </SubMenu>
        );
      }else {
        navItems.push(
          <Menu.Item key={ this.state.items[i] }>
            <Icon type="app"/>{this.state.items[i]}
          </Menu.Item>
        );
      }
    }
    return navItems;
  }
  render(){
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        { this.getItems() }
      </Menu>
    );
  }
}

export default Nav;
