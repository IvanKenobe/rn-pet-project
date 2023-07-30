import React from 'react';
import {Text, View} from 'react-native';
import getStyles from '../styles';

const Header = () => {
  const styles = getStyles();
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Gallery</Text>
    </View>
  );
};

export default Header;
