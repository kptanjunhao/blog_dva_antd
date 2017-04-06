import React from 'react';
import { connect } from 'dva';
import { Affix } from 'antd';
import Nav from '../components/Nav';
import Player from '../components/MusicPlayer';

const IndexPage = () => {
  var handleClick = (key) => {
    if(key=="主页"){

    }else if(key=="关于"){

    }else if(key.indexOf("文章列表")>=0){
      var strs = key.split(":");
      var index = strs[strs.length-1];
    }
  };
  return (
    <div>
      <Affix>
        <Nav handleClick={handleClick}/>
      </Affix>
      <h1>Welcome to dva!</h1>
      <Player/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
