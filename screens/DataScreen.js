import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, AsyncStorage } from 'react-native';
import { TabNavigator, StackNavigator, StackRouter } from 'react-navigation';
import Icon                 from 'react-native-vector-icons/SimpleLineIcons';

import MapScreen from './MapScreen';
import SettingsScreen from './SettingsScreen';
import InputScreen from './InputScreen';
import CardScreen from './CardScreen';
import CardScreenTwo from './CardScreen';
import CardScreenThree from './CardScreen';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class DataScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
     tabBarIcon: ({ tintColor }) => {
        return <Icon name="pie-chart" size={25} color={tintColor} />;
      }
    });
  render() {
    MainNavigator = TabNavigator({
        GreenZone: { screen: CardScreen},
        YellowZone: { screen: CardScreenTwo },
        RedZone: { screen: CardScreenThree },
      }, { tabBarPosition: 'top', animationEnabled: true, })

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
    paddingBottom: 10,
  },
});

export default DataScreen;