import React from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';
import getStyles from './styles';

const BottomModal = ({visible, toggleVisible, onModalHidden, children}) => {
  const styles = getStyles();
  return (
    <Modal
      useNativeDriver
      statusBarTranslucent
      isVisible={visible}
      onBackdropPress={toggleVisible}
      onModalHide={onModalHidden}
      hideModalContentWhileAnimating
      style={styles.wrapper}>
      <View style={styles.content}>{children}</View>
    </Modal>
  );
};

export default BottomModal;
