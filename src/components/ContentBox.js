/**
 * Created by Tan on 2017/5/24.
 */
import { Collapse } from 'antd';
const Panel = Collapse.Panel;



const ContentBox = ({ artArr }) => {

  let getContent = () => {
    "use strict";
    if(artArr.length != 0){
      console.log(artArr.length);
      return artArr.reverse().map(function(article){
        return(
          <Panel header={ article.title+"-"+article.createtime } key={article.id}>
            <p>{article.content}</p>
          </Panel>
        );
      })
    }else{
      return(<Panel header="Hello World">Hello World!</Panel>);
    }
  }

  return(
    <Collapse bordered={false} defaultActiveKey={['1']}>
      {
        getContent()
      }
    </Collapse>
  );
};

export default ContentBox;
