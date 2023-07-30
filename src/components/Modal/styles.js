import {StyleSheet} from 'react-native';

const getStyles = () => {
  return StyleSheet.create({
    wrapper: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    content: {
      backgroundColor: 'white',
      height: '20%',
      padding: 16,
    },
  });
};

export default getStyles;
