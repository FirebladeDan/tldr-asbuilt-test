import React from 'react';
import { DIPanel } from '../panels/Panels';
import { RectObject } from '../objects/Objects.js';
import './draw.css';

//Home Page Component
export class Draw extends React.Component {
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
      <div className='BodyContainer'>
        <div className='LeftPanel'>
          <DIPanel diList={diList} />
        </div>
        <div className='Slider'></div>
        <div className='DrawArea'>
          <div className='DrawPage'>
            <RectObject x={200} y={20} />
            <RectObject x={400} y={300} />
          </div>
        </div>
      </div>
    )
  }
}

export default Draw;