import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  textInputStyle: {
    height: 40,
    // paddingLeft: 20,
    margin: 20,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 1,
    backgroundColor: 'white',
    fontFamily: 'TTNorms-Regular',
    color: '#000000',
    // width: windowWidth / 2,
  },
  otpButtonContainer: {
    // flex: 1,
    height: windowHeight / 16,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    backgroundColor: '#733AFB',
    borderRadius: 15,
  },
  otpButtonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
