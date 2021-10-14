import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Navigation} from 'react-native-navigation';

// import keys from '../../../configurations/keys';
import styles from './index.style';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobNum: '',
      showActivity: false,
      disableSubmit: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  navigateToOtp = async () => {
    if (this.state.mobNum.length == 0) {
      Alert.alert(
        'Please enter registered Mobile number',
        'Mobile number is required',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else if (!this.validateMobileNumber(this.state.mobNum)) {
      Alert.alert(
        'Please enter valid Mobile number',
        'Mobile number you entered is not valid!',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else {
      this.setState({
        showActivity: true,
        disableSubmit: true,
      });

      // Login goes here
      let payload = {
        phone_number: this.state.mobNum,
        // token: token
      };

      fetch(keys.backendURL + 'prod/customer/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(async responseJSON => {
          console.log(responseJSON);
          if (responseJSON.msg == 'success') {
            this.setState({
              showActivity: false,
              disableSubmit: false,
            });

            this.props.navigation.navigate('Otp', {
              phone_number: this.state.mobNum,
            });
          } else {
            this.setState({
              showActivity: false,
              disableSubmit: false,
            });

            Alert.alert(
              'Error...',
              responseJSON.msg,
              [{text: 'OK', onPress: () => {}}],
              {cancelable: false},
            );
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            showActivity: false,
            disableSubmit: false,
          });
        });
    }
  };

  //Mobile number validation
  validateMobileNumber = mobNum => {
    var mobNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return mobNumber.test(mobNum);
  };

  navigateToSignUp = () => {
    // this.props.navigation.navigate('Register');
    Navigation.push('LoginStack', {
      component: {
        name: 'Signup',
      },
    });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{}}>
            {/* <Image
              source={require('../../../../assets/images/logo.png')}
              style={{
                flex: 0.5,
                resizeMode: 'contain',
                justifyContent: 'center',
              }}
            /> */}
          </View>
          <View>
            <Text
              style={{
                color: '#18024B',
                fontSize: 32,
                fontWeight: 'bold',
              }}>
              Live your life{'\n'}with the best{'\n'}as your meal
            </Text>
          </View>
          <View style={{paddingVertical: 5}}>
            <Text
              style={{
                color: '#18024B',
                fontSize: 11,
                textAlign: 'center',
              }}>
              Find the best to make the best{'\n'}meal for you
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View style={{paddingHorizontal: 15}}>
            <TextInput
              style={styles.textInputStyle}
              maxLength={10}
              keyboardType={'numeric'}
              value={this.state.mobNum}
              returnKeyType="next"
              onChangeText={phone => {
                this.setState({
                  mobNum: phone,
                });
              }}
              placeholder="Mobile number"
              placeholderTextColor="#000000"
            />
          </View>
          {this.state.showActivity && (
            <View>
              <ActivityIndicator size="large" color="#733AFB" />
            </View>
          )}
          <View style={{paddingHorizontal: 30, paddingTop: 15}}>
            <TouchableOpacity
              style={styles.otpButtonContainer}
              disabled={this.state.disableSubmit}
              onPress={() => this.navigateToOtp()}>
              <Text style={{color: '#FFFFFF'}}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 45}}>
            <TouchableOpacity
              // disabled={this.state.disableSubmit}
              style={styles.otpButtonContainer1}
              onPress={() => this.navigateToSignUp()}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{}}>New User? </Text>
                <Text style={{color: '#733AFB'}}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
