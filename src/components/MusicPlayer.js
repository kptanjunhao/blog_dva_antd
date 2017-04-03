/**
 * Created by Tan on 2017/4/3.
 */
import React from 'react';
import { Affix , Button } from 'antd';

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
};

class Player extends React.Component {
  constructor(){
    super()
    this.state = {
      isShowList: true,
      isExpand: true
    }
    this.handleShowListClick = this.handleShowListClick.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleShowListClick() {
    this.setState({ isShowList:!this.state.isShowList });
  }

  handleExpandClick() {
    this.setState({ isExpand:!this.state.isExpand });
  }

  getButton(isShowListButton,isExpand){
    var style = {
      float:'right'
    }
    if(isShowListButton){
      return(
        <div>
          <Button style={style} onClick={ this.handleShowListClick } hidden type="primary" shape="circle"
                  icon="bars"/>
          <Button style={style} onClick={ this.handleExpandClick } type="primary" shape="circle" icon="arrow-down"/>
        </div>
      );
    }
    return(
      <div>
        <Button style={style} onClick={ this.handleExpandClick } type="primary" shape="circle" icon="arrow-up"/>
      </div>
    );
  }

  render() {
    var bottom = (this.state.isShowList ? -5 : -231);
    bottom = this.state.isExpand ? bottom : -351;
    return (
      <Affix style={{ position: 'fixed', right: 0, bottom: bottom }}>
        { this.getButton(this.state.isExpand) }
        <embed
          src="http://www.xiami.com/widget/283751486_3381901,1770692721,374039,2072395,3381910,374040,3381909,3599312,1772446369,1770665107,1770692726,3381907,2072394,_235_346_FF8719_494949_0/multiPlayer.swf"
          type="application/x-shockwave-flash" width="235" height="346" wmode="opaque"></embed>
      </Affix>
    );
  }
};

export default Player;




