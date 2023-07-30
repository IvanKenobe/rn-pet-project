import {StyleSheet} from 'react-native';

const getStyles = () => {
  return StyleSheet.create({
    wrapper: {
      alignItems: 'center',
    },
    avatarWrapper: {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: '#EEEEEE',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 100,
    },
  });
};

export default getStyles;
