import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import FurnitureItem from "../FurnitureItem";

import styles from './styles';
import furnitures from './furnitures';

const FurnituresList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={furnitures}
        renderItem={({ item }) => <FurnitureItem furniture={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
      />
    </View>
  );
};

export default FurnituresList;
