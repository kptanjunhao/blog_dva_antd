import React from 'react';
import { connect } from 'dva';
import { Affix } from 'antd';
import Nav from '../components/Nav';
import Player from '../components/MusicPlayer';
import request from '../utils/request';

const IndexPage = (state) => {
  let handleClick = (key) => {
    if(key=="主页"){

    }else if(key=="关于"){

    }else if(key.indexOf("文章")>=0){
      let strs = key.split(":");
      let index = strs[strs.length-1];
      request("http://localhost:8080/getArticlesByCategoryId?cid="+state.nav.artCates[index].category_id).then(
        ({data}) => {
          var artDatas = data.data
          console.log(artDatas);
          if (data == undefined) {
            artDatas = [];
          }
        });
    }
    console.log(state.nav.current);
  };

  let getContent = () => {

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

export default connect(mapStateToProps)(IndexPage);
