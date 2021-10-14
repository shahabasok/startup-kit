import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';

// import keys from '../../../configurations/keys';
import styles from './index.style';

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      mobNum: '',
      address: '',
      email: '',
      refered_by: '',
      showActivity: false,
      disableSubmit: false,
    };
  }

  registerUser = () => {
    if (
      this.state.userName.length == 0 &&
      this.state.mobNum.length == 0 &&
      this.state.address.length == 0
    ) {
      Alert.alert(
        'Please fill in all fields',
        'All required fields are empty',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else if (
      this.state.userName.length == 0 ||
      this.state.mobNum.length == 0 ||
      this.state.address.length == 0
    ) {
      Alert.alert(
        'Please fill in fields',
        'Please enter all required fields',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else if (!this.validateMobileNumber(this.state.mobNum)) {
      Alert.alert(
        'Hmm.. Mobile Number is not valid',
        'Please enter a valid mobile number',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else if (this.state.userName.length < 4) {
      Alert.alert(
        'Hmm.. Error in Shop Name',
        'Please enter a valid name, name is less than 4 characters',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else if (this.state.address.length < 10) {
      Alert.alert(
        'Hmm.. Error in Address',
        'Please enter a valid address, Address is less than 10 characters',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else {
      this.setState({
        showActivity: true,
        disableSubmit: true,
      });
      let payload = {
        phone_number: this.state.mobNum,
        address: this.state.address,
        name: this.state.userName,
        email: this.state.email,
        refered_by: this.state.refered_by,
      };

      // Regitration goes here 584476
      fetch(keys.backendURL + 'prod/customer/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(response => response.json())
        .then(responseJSON => {
          this.setState({
            showActivity: false,
            disableSubmit: false,
          });

          if (responseJSON.msg == 'success') {
            this.props.navigation.navigate('Otp', {
              phone_number: this.state.mobNum,
            });
          } else {
            Alert.alert(
              'Registration Failed!!!',
              `${responseJSON.msg}`,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    this.setState({
                      disableSubmit: false,
                      showActivity: false,
                    });
                  },
                },
              ],
              {cancelable: false},
            );
          }
        })
        .catch(err => {
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

  navigateToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.fullScreen}>
        <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
        <ScrollView>
          <View>
            <Text style={styles.headerText}>Sign up and get started</Text>
            <Text style={{fontFamily: 'TTNorms-Regular'}}>
              Fill in details to continue
            </Text>
          </View>
          <View style={{flex: 1, paddingTop: 15}}>
            <View>
              <TextInput
                style={styles.textInputStyle}
                keyboardType={'email-address'}
                value={this.state.userName}
                returnKeyType="next"
                onChangeText={name => {
                  this.setState({
                    userName: name,
                  });
                }}
                placeholderTextColor="#000000"
                // inlineImageLeft="contact"
                // inlineImagePadding={25}
                // onChangeText={(text) => searchFilterFunction(text)}
                // value={search}
                // underlineColorAndroid="transparent"
                placeholder="Full name"
              />
            </View>
            <View>
              <TextInput
                style={styles.textInputStyle}
                maxLength={10}
                keyboardType={'numeric'}
                // inlineImageLeft="contact"
                inlineImagePadding={25}
                value={this.state.mobNum}
                returnKeyType="next"
                onChangeText={number => {
                  this.setState({
                    mobNum: number,
                  });
                }}
                placeholderTextColor="#000000"
                // onChangeText={(text) => searchFilterFunction(text)}
                // value={search}
                // underlineColorAndroid="transparent"
                placeholder="Mobile number"
              />
            </View>
            <View style={{justifyContent: 'flex-start'}}>
              <TextInput
                style={styles.textInputStyle}
                keyboardType={'email-address'}
                // inlineImageLeft="contact"
                inlineImagePadding={25}
                value={this.state.email}
                returnKeyType="next"
                onChangeText={email => {
                  this.setState({
                    email: email,
                  });
                }}
                placeholderTextColor="#000000"
                // onChangeText={(text) => searchFilterFunction(text)}
                // value={search}
                // underlineColorAndroid="transparent"
                placeholder="Email"
              />
            </View>

            <View style={{justifyContent: 'flex-start'}}>
              <TextInput
                style={styles.textInputStyle}
                keyboardType={'email-address'}
                // inlineImageLeft="contact"
                inlineImagePadding={25}
                value={this.state.email}
                returnKeyType="next"
                onChangeText={email => {
                  this.setState({
                    refered_by: email,
                  });
                }}
                placeholderTextColor="#000000"
                // onChangeText={(text) => searchFilterFunction(text)}
                // value={search}
                // underlineColorAndroid="transparent"
                placeholder="Refered by"
              />
            </View>
            <View style={{justifyContent: 'flex-start'}}>
              <TextInput
                style={styles.textInputStyle}
                keyboardType={'email-address'}
                // inlineImageLeft="contact"
                inlineImagePadding={25}
                value={this.state.address}
                returnKeyType="next"
                onChangeText={address => {
                  this.setState({
                    address: address,
                  });
                }}
                placeholderTextColor="#000000"
                // onChangeText={(text) => searchFilterFunction(text)}
                // value={search}
                // underlineColorAndroid="transparent"
                placeholder="Current Address"
              />
            </View>
          </View>
          {this.state.showActivity && (
            <View>
              <ActivityIndicator size="large" color="#733AFB" />
            </View>
          )}
          <View style={{padding: 15, paddingTop: 15}}>
            <TouchableOpacity
              style={styles.otpButtonContainer}
              disabled={this.state.disableSubmit}
              onPress={() => this.registerUser()}>
              <Text style={{color: '#FFFFFF'}}>Next</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 15,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              borderRadius: 20,
            }}
          />
          <View style={{paddingTop: 15}}>
            <TouchableOpacity
              style={styles.otpButtonContainer1}
              onPress={() => this.navigateToLogin()}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{}}>Already a user? </Text>
                <Text style={{color: '#0F62DE'}}>LogIn here</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
