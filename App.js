//Vault Quotes
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Alert,
  Share,
} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

import {ShareNowIcon} from './IconComponent';
import {ClipboardIcon} from './IconComponent';

function App() {
  // useState to manage loading time resposnse from api
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = () => {
    setIsLoading(true);
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(result => {
        setQuote(result.content);
        setAuthor(result.author);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    randomQuote();
  }, []);
  //copy to clipboard
  const copyToClipboard = () => {
    Clipboard.setString(Quote);
    Snackbar.show({
      text: 'Quote has been copied !',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: Quote,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#68376c',
      }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          width: '90%',
          backgroundColor: '#FFF',
          borderRadius: 20,
          padding: 20,
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '600',
            color: '#68376c',
            marginBottom: 20,
          }}>
          Quote of the Day
        </Text>

        <Text
          style={{
            color: '#000',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>
          {Quote}
        </Text>

        <Text
          style={{
            textAlign: 'right',
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: 16,
            color: '#000',
          }}>
          ~ {Author}
        </Text>
        <TouchableOpacity
          onPress={randomQuote}
          style={{
            backgroundColor: isLoading
              ? 'rgba(104, 55, 108, 0.7)'
              : 'rgba(104, 55, 108, 1)',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: '#e8d3e8', fontSize: 18, textAlign: 'center'}}>
            {isLoading ? 'Loading...' : 'New Quote'}
          </Text>
        </TouchableOpacity>
        {/* View for the two buttons  */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={copyToClipboard}
            style={{
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: '#68376c',
              borderRadius: 100,
              padding: 10,
            }}>
            <ClipboardIcon size={20} color="#68376c" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onShare}
            style={{
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: '#68376c',
              borderRadius: 100,
              padding: 10,
            }}>
            <ShareNowIcon size={20} color="#68376c" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export default App;
