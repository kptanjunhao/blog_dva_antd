import React from 'react';
import { connect } from 'dva';
import { Affix } from 'antd';
import Nav from '../components/Nav';
import Player from '../components/MusicPlayer';
import ContentBox from '../components/ContentBox';
import request from '../utils/request';

const IndexPage = (state) => {
  let handleClick = (key) => {
    if(key=="主页"){
      window.location.href="/";
    }else if(key=="关于"){

    }else if(key.indexOf("文章")>=0){
      let strs = key.split(":");
      let index = strs[strs.length-1];
      request("http://localhost:8080/getArticlesByCategoryId?cid="+state.nav.artCates[index].category_id).then(
        ({data}) => {
          state.dispatch({
            type: 'articles/update',
            payload: {
              items: data.data,
            },
          });
        });
    }
    console.log(state.nav.current);
  };


  return (
    <div>
      <Affix>
        <Nav indexHandleClick={handleClick} nav={state.nav} dispatch={state.dispatch}/>
      </Affix>
      <ContentBox artArr={ state.articles.items }/>
      <Player/>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    nav: state.nav,
    articles: state.articles,
  };
}

export default connect(mapStateToProps)(IndexPage);
