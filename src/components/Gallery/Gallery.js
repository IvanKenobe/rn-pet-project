import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Header from './components/Header';
import EmptyList from './components/EmptyList';
import GalleryItem from './components/GalleryItem';
import getStyles from './styles';
import ImageCropPicker from 'react-native-image-crop-picker';

const Gallery = () => {
  const styles = getStyles();
  const [images, setImages] = useState([]);

  const addImages = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      width: 100,
      height: 100,
    }).then(selectedImages =>
      setImages(state => [...state, ...selectedImages]),
    );
  };

  console.log(JSON.stringify(images, null, 4));

  const onDeleteImage = path => {
    const filteredImages = images.filter(item => item.path !== path);
    setImages(filteredImages);
  };

  return (
    <>
      <Header />
      <FlatList
        style={styles.galleryWrapper}
        horizontal={images.length > 0}
        data={images}
        renderItem={({item}) => (
          <GalleryItem item={item} onDelete={() => onDeleteImage(item.path)} />
        )}
        ListEmptyComponent={() => <EmptyList onAddImages={addImages} />}
      />
      {images.length > 0 && (
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: 10}}
          onPress={addImages}>
          <Text>Add more</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Gallery;
