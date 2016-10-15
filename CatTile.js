import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class CatTile extends Component {
  render() {
    return (
      <View key={`view.${this.props.catNumber}`} style={{
    flex: 1,
    alignItems: 'flex-start', 
    flexDirection: 'column',
    height: 150
  }} >

          <Image key={`image.${this.props.catNumber}`} resizeMode={'stretch'}  style={{width: 150, flex: 1}} source={{'uri' : `http://thecatapi.com/api/images/get?format=src&type=jpg&number=${this.props.catNumber}`}}/>
          <Text>Just Now</Text>
          <Text>200M</Text>
      </View>
    )
  }
}
