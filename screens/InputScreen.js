import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import { AppRegistry, ScrollView } from 'react-native';
import Icon                 from 'react-native-vector-icons/SimpleLineIcons' 

export default class InputOneScreen extends Component {
 static navigationOptions = ({ navigation }) => ({
     tabBarIcon: ({ tintColor }) => {
        return <Icon name="notebook" size={30} color={tintColor} />;
      }
    });
  render() {
    return (
       <ScrollView>
      <View flex paddingH-25 paddingT-120>
        <TextInput text50 placeholder="Capital"  dark10/>
        <TextInput text50 placeholder="Credit Card Debt"  dark10/>
        <TextInput text50 placeholder="Existing Debt" dark10/>
        <TextInput text50 placeholder="Accounts Receivable"  dark10/>
        <TextInput text50 placeholder="Profitability"  dark10/>
        <TextInput text50 placeholder="Bankruptcy"  dark10/>
        <TextInput text50 placeholder="Place # about company"  dark10/>
         <Button text70 white background-orange30 label="Update Data"/>
      </View>
      </ScrollView>
    );
  }
}