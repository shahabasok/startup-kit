import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2538E3',
  },
  fadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  image: {
    flex: 0.8,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
