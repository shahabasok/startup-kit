import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: windowWidth / 32,
  },
  // headerContainer: {
  //   flex: 1,
  // },
  headerText: {
    fontSize: 25,
    fontFamily: 'TTNorms-Bold',
  },
  formContainer: {
    flex: 5,
    justifyContent: 'center',
    // alignItems: 'center',
  },
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
    backgroundColor: '#0F62DE',
    borderRadius: 10,
  },
  otpButtonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
