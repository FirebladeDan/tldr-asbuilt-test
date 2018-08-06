import React from 'react';
import { DIPanel } from './panels/Panels';
import { RectObject } from './Objects/Objects';

//Home Page Component
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Device Instance Test Data
    const diList = [  {model:'SEL-351',   id:'52-351-1'},
                      {model:'SEL-311L',  id:'87-311L-A'},
                      {model:'SEL-311L',  id:'87-311L-B'},
                      {model:'SEL-387E',  id:'87-T1-A'},
                      {model:'SEL-487',   id:'87-T1-B'},
                      {model:'SEL-351',   id:'11-351'}];
    return (
      <div>
        <DIPanel diList={diList} />
        <RectObject />
      </div>
    )
  }
}

export default Home;