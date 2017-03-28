import React from 'react';
import { connect } from 'dva';
import { Affix } from 'antd';
import CountApp from '../components/CountApp';
import Nav from '../components/Nav';

const IndexPage = () => {

  return (
    <div>
      <Affix>
        <Nav/>
        <h1>Hello World</h1>
      </Affix>
      <h1>Welcome to dva!</h1>
      <CountApp/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
