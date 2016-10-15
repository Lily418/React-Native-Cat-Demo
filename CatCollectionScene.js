import React, { Component } from 'react';
import { View } from 'react-native';

import GridView from 'react-native-grid-view'
import HeaderBar from './HeaderBar'
import CatTile from './CatTile'

export default class CatCollectionScene extends Component {

  constructor(props) {
  super(props);
  this.state = {
    dataSource: [1,2,3,4,5,6,7,8,9,10]
  }
}

  renderCatTile(catNumber) {
    return (<CatTile key={`cattile.${catNumber}`} catNumber={catNumber}/>)
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 10}}>
      <HeaderBar style={{flex: 1}} />
      <GridView
      style={{flex: 5}}
      items={this.state.dataSource}
      itemsPerRow={3}
      renderItem={this.renderCatTile}
      />
      </View>
    )
  }
}
