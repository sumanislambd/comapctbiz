import React, { Component } from 'react';
import { View, Text, Image, ScrollView} from 'react-native'
import { Button, Card } from 'react-native-elements';

class CardScreenTwo extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <Card
          title='Location 1'
          image={require('../assets/icon.png')}>
          <Text style={{marginBottom: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Text>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
        <Card
          title='Location 2'
          image={require('../assets/icon.png')}>
          <Text style={{marginBottom: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Text>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
        <Card
          title='Location 3'
          image={require('../assets/icon.png')}>
          <Text style={{marginBottom: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Text>
          <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>

      </View>
      </ScrollView>
      );
    }
}

export default CardScreenTwo;