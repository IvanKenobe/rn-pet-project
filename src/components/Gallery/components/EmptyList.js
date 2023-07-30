import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import getStyles from '../styles';

const EmptyList = ({onAddImages}) => {
  const styles = getStyles();
  return (
    <TouchableOpacity onPress={onAddImages} style={styles.emptyList}>
      <Text style={styles.emptyListText}>You have no images</Text>
    </TouchableOpacity>
  );
};

export default EmptyList;
