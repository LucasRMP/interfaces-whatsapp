import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import { Calls, Chats, Status, HomeHeader } from './components';

const topTabNav = createMaterialTopTabNavigator(
  {
    Chats: {
      screen: Chats,
      navigationOptions: {
        title: 'CHATS',
      },
    },

    Status: {
      screen: Status,
      navigationOptions: {
        title: 'STATUS',
      },
    },

    Calls: {
      screen: Calls,
      navigationOptions: {
        title: 'CALLS',
      },
    },
  },
  {
    initialRouteName: 'Chats',
    tabBarOptions: {
      style: {
        backgroundColor: '#41A3C4',
      },
      indicatorStyle: {
        backgroundColor: '#fff',
      },
      labelStyle: {
        fontWeight: 'bold',
      },
      activeTintColor: 'rgba(255,255,255,1)',
      inactiveTintColor: 'rgba(255,255,255,.5)',
    },
  }
);

const stackNav = createStackNavigator(
  {
    Main: {
      screen: topTabNav,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#41A3C4',
          elevation: 0,
        },
        header: <HomeHeader />,
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);

const Routes = createAppContainer(stackNav);

export default Routes;
