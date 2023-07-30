import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import Profile from './src/components/Profile/Profile';
import BottomModal from './src/components/Modal/Modal';
import Gallery from './src/components/Gallery/Gallery';
import CardPay from './src/components/CardPay/CardPay';
import {StripeProvider} from '@stripe/stripe-react-native';

const App = () => {
  const [isVisible, setVisible] = useState(false);
  const [image, setImage] = useState('');

  const openGallery = () => {
    ImageCropPicker.openPicker({
      height: 300,
      width: 300,
      multiple: false,
      cropperCircleOverlay: true,
      cropping: true,
      mediaType: 'image',
    }).then(selectedImage => {
      setImage(selectedImage);
      setVisible(false);
    });
  };

  const openCamera = () => {
    ImageCropPicker.openCamera({
      height: 300,
      width: 300,
      multiple: false,
      cropperCircleOverlay: true,
      mediaType: 'image',
    }).then(selectedImage => {
      setImage(selectedImage);
      setVisible(false);
    });
  };

  return (
    <SafeAreaView>
      <StripeProvider
        publishableKey="pk_test_51LlLtyEfyNytugCpST9lkin1iMG4TahtMCqIMnCpVvfZL52SEj9enDjd1NcU5zCfVDHCipMgyyXbJt7eBwY0eReB00DMFc3eRd"
        merchantIdentifier={'merchant.com.stripe.react.native'}>
        <StatusBar />
        <View style={styles.container}>
          <Profile
            avatar={image.path}
            profile={image.filename}
            onPress={() => setVisible(true)}
          />
          <Gallery />
          <BottomModal
            visible={isVisible}
            toggleVisible={() => setVisible(false)}>
            <TouchableOpacity
              onPress={openGallery}
              style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>Photo Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera} style={styles.buttonWrapper}>
              <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>
          </BottomModal>
          <CardPay />
        </View>
      </StripeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    borderWidth: 1,
    borderColor: '#5C60FF',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#5C60FF',
    fontSize: 20,
    lineHeight: 24,
  },
});

export default App;
