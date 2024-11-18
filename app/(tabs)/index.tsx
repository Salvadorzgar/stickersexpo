import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { Image } from 'expo-image';
// import { Link } from 'expo-router';
import { Text, View, /* @tutinfo Import <CODE>StyleSheet</CODE> to define styles. */ StyleSheet } from 'react-native';

const PlaceHolderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button theme='primary' label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* @tutinfo Add the value of <CODE>backgroundColor</CODE> property with <CODE>'#25292e'</CODE>.*/
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
