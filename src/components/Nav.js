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
      current:"主页",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    if (this.state == 1) {
      var result = request("http://localhost:8080/test").then(
        ({data})=>{
          if(data==null){
            return;
          }
          console.log(data.data);
          this.setState({
            items:["主页","文章"],
            current:this.state.current,
          })
        });
    }
  }
  handleClick(e){
    this.setState({
      current:e.key
    })
  }
  getItems(){
    var navItems = [];
    for(var i=0;i<this.state.items.length;i++){
      navItems.push(
        <Menu.Item key={ this.state.items[i] }>
          <Icon type="app" />{this.state.items[i]}
        </Menu.Item>
      );
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
