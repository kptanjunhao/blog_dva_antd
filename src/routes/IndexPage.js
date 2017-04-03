import React from 'react';
import { connect } from 'dva';
import { Affix } from 'antd';
import Nav from '../components/Nav';
import Player from '../components/MusicPlayer';

const IndexPage = () => {
  return (
    <div>
      <Affix>
        <Nav/>
        <h1>Hello World</h1>
      </Affix>
      <h1>Welcome to dva!</h1>
      <Player/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
