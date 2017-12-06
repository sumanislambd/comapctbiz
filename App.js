import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { AppLoading } from 'expo';
import Data from './DataSimple';
import DataDefault from './DataDefault';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DataScreen from './screens/DataScreen';
import CurrentBudgetScreen from './screens/CurrentBudgetScreen';
import SettingsScreen from './screens/SettingsScreen';

import {
  Circle, Carousel, CarouselScale, CarouselVideo, CarouselVideoScale, FullSwipe, SwipeBlur, Simple, SwipeSimple, Game,
  BoardSwipe, Video, BoardSimple, SwipeCard, AnimatedSimple, BoardGradient, Continuous, Parallax, FullGradient
} from './Walkthrough/Index';


export default class App extends React.Component {
  render() {
    const OnCarousel = ({ navigation }) => (<Carousel data={Data} navigation={navigation}/>);
    

    const MainNavigator = TabNavigator({
     Carousel: {screen: OnCarousel},
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator ({
          map: { screen: MapScreen },
          data: { screen: DataScreen },
            current: {
              screen: StackNavigator ({
                current: { screen: CurrentBudgetScreen },
                settings: { screen: SettingsScreen }
            })
          }
        })
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
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
