import React from 'react';
import AnimateComponent from './component/index';
import Animate from './component/Animate.js';
// import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {
          one:'1',
          two: 'a'
        },
        {
          one:'2',
          two: 'b'
        },
        {
          one:'3',
          two: 'three'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div id="content">
          这是原本的div层
          <div id="show">
            <p>这是鼠标移动上去后的div层</p>
          </div>
        </div>
        {
          this.state.list.map( item => {
            return <AnimateComponent oneContent={item.one} twoContent={item.two}/>
          })
        }
        <Animate/>
      </div>
    )
  }
}