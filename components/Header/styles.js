import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 50,
    // resizeMode: 'contain',
  },
  facebook: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});

export default styles;
