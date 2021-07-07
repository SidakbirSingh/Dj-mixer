import * as React from 'react';
import { Thext, View, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Sound from './components/SoundButton';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Sound
          soundUri="https://audio-previews.elements.envatousercontent.com/files/222265174/preview.mp3"
          title="Ninja"
          color="red"
          textColor="white"
        />
        <Sound
          soundUri="https://audio-previews.elements.envatousercontent.com/files/235796916/preview.mp3"
          title="Idea"
          color="green"
          textColor="white"
        />
        <Sound
          soundUri="https://audio-previews.elements.envatousercontent.com/files/317079376/preview.mp3"
          title="Ghost Train"
          color="yellow"
        />
        <Sound
          soundUri="https://audio-previews.elements.envatousercontent.com/files/149231951/preview.mp3"
          title="Granted"
          color="pink"
        />
      </View>
    );
  }
}
