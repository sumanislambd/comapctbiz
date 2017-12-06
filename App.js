import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DataScreen from './screens/DataScreen';
import CurrentBudgetScreen from './screens/CurrentBudgetScreen';
import SettingsScreen from './screens/SettingsScreen';



export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
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
