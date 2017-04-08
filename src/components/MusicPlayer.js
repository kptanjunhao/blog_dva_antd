/**
 * Created by Tan on 2017/4/3.
 */
import React from 'react';
import { Affix , Button } from 'antd';
import style from '../musicPlayer.css';

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
      isExpand: false
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

  getButton(){
    if(this.state.isExpand){
      let listButtonTitle = !this.state.isShowList ? "显示列表" : "隐藏列表";
      return(
        <div>
          <Button style={{float:'left'}} onClick={ this.handleExpandClick } type="primary" shape="circle" icon="arrow-down"/>
          <Button style={{float:'right'}} onClick={ this.handleShowListClick } hidden type="primary"
                  icon="bars">{ listButtonTitle }</Button>
        </div>
      );
    }
    return(
      <div>
        <Button style={{float:'right'}} onClick={ this.handleExpandClick } type="primary" icon="arrow-up">显示播放器</Button>
      </div>
    );
  }

  render() {
    var playerStyle = (this.state.isShowList ? style.player_affix_list_show : style.player_affix_list_hide);
    playerStyle = this.state.isExpand ? playerStyle : style.player_affix_hide;
    return (
        <Affix className={playerStyle}>
          { this.getButton() }
          <embed src="http://www.xiami.com/widget/283751486_3381901,1770692721,374039,2072395,3381910,374040,3381909,3599312,1772446369,1770665107,1770692726,3381907,2072394,_235_346_FF8719_494949_0/multiPlayer.swf"
  type="application/x-shockwave-flash" width="235" height="346" wmode="opaque"/>
        </Affix>
    );
  }
};

export default Player;




