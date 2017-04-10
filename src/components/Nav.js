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



// class Nav extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       items:["主页","文章列表","关于"],
//       artCates:["暂无数据"],
//       current:"主页",
//     };
//     this.handleClick = this.handleClick.bind(this);
//
//     request("http://localhost:8080/getCategories").then(
//       ({data}) => {
//         if (data == null) {
//           return;
//         }
//         console.log(data.data);
//         this.setState({
//           artCates: data.data
//         });
//       });
//   }
//   handleClick(e){
//     this.setState({
//       current:e.key
//     });
//     this.props.handleClick(e.key);
//   }
//   getItems(){
//     var navItems = [];
//     for(var i=0;i<this.state.items.length;i++){
//       if(this.state.items[i] == "文章列表"){
//         var subItems = []
//         for(var j=0;j<this.state.artCates.length;j++){
//           subItems.push(
//             <Menu.Item key={"文章列表:"+j}>{ this.state.artCates[j] }</Menu.Item>
//           );
//         }
//         navItems.push(
//           <SubMenu title={this.state.items[i]} key="文章列表">
//             { subItems }
//           </SubMenu>
//         );
//       }else {
//         navItems.push(
//           <Menu.Item key={ this.state.items[i] }>
//             <Icon type="app"/>{this.state.items[i]}
//           </Menu.Item>
//         );
//       }
//     }
//     return navItems;
//   }
//   render(){
//     return (
//       <Menu
//         onClick={this.handleClick}
//         selectedKeys={[this.state.current]}
//         mode="horizontal"
//       >
//         { this.getItems() }
//       </Menu>
//     );
//   }
// }

export default Nav;
