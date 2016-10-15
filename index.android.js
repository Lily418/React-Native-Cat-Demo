import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import OnboardingScene from './OnboardingScene';

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Welcome to Pettr', index: 0 }}
        renderScene={(route, navigator) =>
          <OnboardingScene />
        }
      />
    )
  }
}

AppRegistry.registerComponent('Pettr', () => SimpleNavigationApp);
