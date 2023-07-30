import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import getStyles from '../styles';
import Modal from 'react-native-modal';
import {IconBack} from '../../../assets/icons';

const GalleryItem = ({item, onDelete}) => {
  const styles = getStyles();
  const [visible, setVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.galleryItemWrapper}
      onPress={() => setVisible(true)}>
      <TouchableOpacity style={styles.galleryItemDelete} onPress={onDelete}>
        <Text style={styles.galleryItemClose}>x</Text>
      </TouchableOpacity>
      <Image
        resizeMode="cover"
        source={{uri: item?.path}}
        style={styles.galleryItem}
      />
      <Modal
        style={{marginHorizontal: 0}}
        visible={visible}
        animationType="slide"
        statusBarTranslucent
        onDismiss={() => setVisible(false)}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBack}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <IconBack />
            </TouchableOpacity>
          </View>
          <Image
            resizeMode="contain"
            source={{uri: item?.path}}
            style={{
              width: 400,
              height: 300,
            }}
          />
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default GalleryItem;
