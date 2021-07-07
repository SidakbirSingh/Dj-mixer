import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class SoundButton extends React.Component {
  playSound = async (soundUri) => {
    await Audio.Sound.createAsync(
      {
        uri: soundUri,
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
        onPress={() => this.playSound(this.props.soundUri)}>
        <Text style={ [styles.text,{color: this.props.textColor}]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 100,
    width: 250,
    height: 75,
    marginLeft: 50,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20 
  }
});
