import {StyleSheet} from 'react-native';

const getStyles = () => {
  return StyleSheet.create({
    galleryWrapper: {
      // width: '100%',
    },
    header: {
      marginTop: 50,
      marginBottom: 15,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      lineHeight: 24,
    },
    emptyList: {
      borderWidth: 1,
      backgroundColor: '#EEEEEE',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
    emptyListText: {
      fontSize: 15,
      lineHeight: 18,
    },
    galleryItemWrapper: {
      marginBottom: 10,
      marginRight: 10,
    },
    galleryItemClose: {
      color: 'white',
      fontSize: 20,
      position: 'absolute',
      top: -3,
      right: 5,
    },
    galleryItemDelete: {
      backgroundColor: 'black',
      borderRadius: 10,
      width: 20,
      height: 20,
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 2,
    },
    galleryItem: {
      height: 100,
      width: 100,
      borderRadius: 10,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalBack: {
      position: 'absolute',
      top: 50,
      zIndex: 999,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
  });
};

export default getStyles;
