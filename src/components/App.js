import React, { Component } from 'react';
import styled               from "styled-components";
import HeadLuan             from './HeadLuan/index';
import FinisPoint           from './FinisPoint/index';
import { 
  Wrapper
}                           from './App/styled.jsx';

class App extends Component {
  render(){
    return(
      <Wrapper id="MainWrapper">
          <FinisPoint></FinisPoint>
          <HeadLuan></HeadLuan>
      </Wrapper>
    );
  }
}

export default App;