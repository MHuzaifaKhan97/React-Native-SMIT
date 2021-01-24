import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Body, Title, Left, Right } from 'native-base';

import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import { StatusBar } from 'react-native';
export default class TabScreen extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#009387'}}>
        <Header androidStatusBarColor="#009387" hasTabs style={{backgroundColor:'#009387'}}>
        {/* <Left /> */}
        <Body style={{alignItems:'center'}}>
          <Title>
            News App
          </Title>
        </Body>
        {/* <Right /> */}

        </Header>
        <Tabs>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}