import React from 'react';
import { connect } from 'dva';
import { Affix } from 'antd';
import Nav from '../components/Nav';
import Player from '../components/MusicPlayer';


const IndexPage = (state) => {
  let handleClick = (key) => {
    if(key=="主页"){

    }else if(key=="关于"){

    }else if(key.indexOf("文章列表")>=0){
      let strs = key.split(":");
      let index = strs[strs.length-1];
    }
  };
  return (
    <div>
      <Affix>
        <Nav indexHandleClick={handleClick} nav={state.nav} dispatch={state.dispatch}/>
      </Affix>
      <h1>Welcome to dva!</h1>
      <Player/>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    nav: state.nav
  };
}
// const NavBar = connect(mapStateToProps)(Nav);

export default connect(mapStateToProps)(IndexPage);
