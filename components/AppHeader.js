import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View
        style={styles.header}>
        <Text> DJ AUDIO MIXER APP STAGE 2 </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  header:{ marginTop: 50,marginLeft: 80,
          marginBottom: 20,
          backgroundColor: 'cyan',
          marginRight: 40}
})