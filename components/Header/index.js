import React from 'react';
import { View, Image, TouchableOpacity, Linking, Alert } from 'react-native';

import styles from './styles';

const Header = () => {

  const handleOnPress = async () => {
    const supported = await Linking.canOpenURL("https://www.facebook.com/Mobil%C4%83-Outlet-NOU%C4%82-Media%C8%99-108841351242044")

    supported === true ? await Linking.openURL("https://www.facebook.com/Mobil%C4%83-Outlet-NOU%C4%82-Media%C8%99-108841351242044") : Alert.alert("Can't open Facebook!")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
      <TouchableOpacity onPress={handleOnPress} >
        <Image style={styles.facebook} source={require('../../assets/images/facebook.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
