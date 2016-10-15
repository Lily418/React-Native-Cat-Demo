import React, { Component } from 'react';
import { AppRegistry, Navigator, BackAndroid } from 'react-native';

import OnboardingScene from './OnboardingScene';
import CatCollectionScene from './CatCollectionScene'

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ scene: 'Onboarding' }}
        renderScene={(route, navigator) => {

          BackAndroid.addEventListener('hardwareBackPress', () => {
              if (navigator && navigator.getCurrentRoutes().length > 1) {
                  navigator.pop();
                  return true;
              }
              return false;
          });

            console.log(route)
            if(route.scene === "Onboarding") {
              return (<OnboardingScene onPrimaryAction={() => {
                navigator.push({
                  scene : 'CatCollection'
                })
              }} />)
            } else if (route.scene === "CatCollection") {
              return(<CatCollectionScene />)
            }
          }
        }
      />
    )
  }
}

AppRegistry.registerComponent('Pettr', () => SimpleNavigationApp);
