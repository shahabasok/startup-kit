import React, {Component} from 'react';
import {View, Text, Animated, Image, StatusBar} from 'react-native';
import {Navigation} from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';

// import asyncStorageFunction from '../../shared/lib/asyncStorage.lib';
// import NewUserStack from '../../../navigator/newUserStack';
// import ExistingUserStack from '../../../navigator/existingUserStack';

import styles from './index.style';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      rotateValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    // this._checkLogin();
    this.fadeIn();
    SplashScreen.hide();
  }

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  _checkLogin = async () => {
    let isAlreadyLoggedIn = await asyncStorageFunction.retrieveData('token');

    setTimeout(() => {
      if (isAlreadyLoggedIn == false) {
        Navigation.setRoot(NewUserStack);
      } else {
        Navigation.setRoot(ExistingUserStack);
      }
    }, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2538E3" />
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: this.state.fadeAnim,
            },
          ]}>
          {/* <Image
            source={require('../../../../assets/images/logo.png')}
            style={styles.image}
          /> */}
        </Animated.View>
      </View>
    );
  }
}
