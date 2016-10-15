import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Button from 'react-native-button';

export default class OnboardingScene extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}> 
        <Image style={{flex : 1, height: 80}} resizeMode={'contain'} source={require('./img/PettrLogo.png')}/>
        <Text style={{flex: 4}} style={{fontSize : 28, textAlign:'center', padding: 80}}>Pettr helps you find cats in your area</Text>
        <View style={{flex: 1}}>
        <Button
        style={{flex: 1, fontSize: 24}}
        onPress={() => {}}>
          I want to find cats
        </Button>
        </View>
      </View>
    )
  }
}
