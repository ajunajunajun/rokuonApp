import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
  
  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync ({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });
    } catch (error) {
      console.log(error)
    }
  }

  async _recStart() {
    const recording = new Audio.Recording();

    try {
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      Alert.alert('You are now recording!');
    } catch (error) {
      Alert.alert('An error occurred!');
    }
  }
  async _recStop() {
    try {
      await rocording.stopAndUnloadAsync();
      Alert.alert('Stop the recording!');
    } catch (error) {
      Alert.alert('An error occurred!');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={this._recStart}
          title="start"
        />
        <Button
          onPress={this._recStop}
          title="stop"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
