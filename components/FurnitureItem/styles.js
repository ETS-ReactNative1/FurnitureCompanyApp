import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  furnitureContainer: {
    width: '100%',
    height: Dimensions.get('screen').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#771427'
  },
  subtitleCTA: {
    // textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    color: '#C66376'
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;
