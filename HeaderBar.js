import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}> 
        <Image style={{flex : 1, height: 80}} resizeMode={'contain'} source={require('./img/PettrHeader.png')}/>
      </View>
    )
  }
}
