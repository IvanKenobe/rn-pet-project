import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import getStyles from './styles';
import {IconEmptyAvatar} from '../../assets/icons';

const Profile = ({avatar, profile, onPress}) => {
  const styles = getStyles();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={styles.avatarWrapper}>
        {avatar ? (
          <Image source={{uri: avatar}} style={styles.avatar} />
        ) : (
          <IconEmptyAvatar currentColor="#000000" width={96} height={96} />
        )}
      </TouchableOpacity>
      <Text>
        {profile
          ? `Picture's name is: ${profile}`
          : 'You have no picture name '}
      </Text>
    </View>
  );
};

export default Profile;
