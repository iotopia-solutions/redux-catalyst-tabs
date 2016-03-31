import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './tab';
import TabList from './tabList';
import './styles/tabs.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeID: ""
    };
  }

  render() {
    return(
      <TabList activeID={this.state.activeID} makeActive={(id) => this.setState({activeID: id})}>
        <Tab tabID="1" key="1">Hello</Tab>
        <Tab tabID="2" key="2">GoodBye</Tab>
        <Tab tabID="3" key="3">Nevermind</Tab>
      </TabList>
    )
  }
}

ReactDOM.render( <App />
  , document.getElementById("main"));

//each tab should track whether it is active and an id 
//tabSet = [{},{}]
//tabID = ""
//
/***
tabSet = [
  {
    tabID: 1,
    tabContent: "hello"
  },
  {
    tabID: 2,
    tabContent: "goodbye"
  }
]
**/

//onClick on each tab for this example