import React from 'react';
import ReactDOM from 'react-dom';
import Tab from '../src/components/tab';
import TabList from '../src/components/tabList';
import './app.scss';
//import {Tab, TabList} from 'redux-calyst-tabs'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeID: ''
    };
  }

  render() {
    return(
      <TabList activeID={this.state.activeID} makeActive={(id) => this.setState({activeID: id})}>
        <Tab tabID='1' key='1'>Hello</Tab>
        <Tab tabID='2' key='2'>GoodBye</Tab>
        <Tab tabID='3' key='3'>Nevermind</Tab>
      </TabList>
    )
  }
}

ReactDOM.render( <App />
  , document.getElementById("main"));