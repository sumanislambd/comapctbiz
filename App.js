import _ from 'lodash';
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, AsyncStorage } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Data from './DataSimple';
import DataDefault from './DataDefault';
import { Provider } from  'react-redux';
import { AppLoading } from 'expo';
import store from './store';


import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DataScreen from './screens/DataScreen';
import CurrentBudgetScreen from './screens/CurrentBudgetScreen';
import SettingsScreen from './screens/SettingsScreen';
import InputScreen from './screens/InputScreen';

import {
  Circle, Carousel, CarouselScale, CarouselVideo, CarouselVideoScale, FullSwipe, SwipeBlur, Simple, SwipeSimple, Game,
  BoardSwipe, Video, BoardSimple, SwipeCard, AnimatedSimple, BoardGradient, Continuous, Parallax, FullGradient
} from './Walkthrough/Index';


export default class App extends React.Component {
   state = { token: null };
 
  async componentWillMount() {
      let token = await AsyncStorage.getItem('fb_token');
 
      if (token) {
          this.setState({ token });
      } else {
          this.setState({ token: false });
      }
      
  }


  render() {
    const OnCarousel = ({ navigation }) => (<Carousel data={Data} navigation={navigation}/>);

    let MainNavigator = null;
 
    if (this.state.token) {
    MainNavigator = TabNavigator({
        Analyze: { screen: InputScreen},
        Map: { screen: MapScreen },
        Data: { screen: DataScreen },
        current: {
          screen: StackNavigator({
            current: { screen: CurrentBudgetScreen },
            settings: { screen: SettingsScreen }
          })
        }
      }, { tabBarPosition: 'bottom' })
    } else {
 
      MainNavigator = TabNavigator({
       Carousel: {screen: OnCarousel},
        auth: { screen: AuthScreen },
        main: {
          screen: TabNavigator({
            Map: { screen: MapScreen },
            Data: { screen: DataScreen },
            current: {
              screen: StackNavigator({
                current: { screen: CurrentBudgetScreen },
                settings: { screen: SettingsScreen }
              })
            }
          }, { tabBarPosition: 'bottom' })
        }
      },
      {
        lazy: true,
        navigationOptions: {
          tabBarVisible: false
        }
      });
    }

     if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }


    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
