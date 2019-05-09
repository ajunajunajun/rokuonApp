import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
  componentWillMount() {
    this._init()
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

  _init = async () => {
    try {
      await Audio.setAudioModeAsync ({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });
    } catch (error) {
      alert('initError')
    }
  }
  _recStart = async () => {
    const recording = new Audio.Recording();
    try {
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      alert('You are now recording!');
    } catch (error) {
      alert('startError');
    }
  }
  _recStop = async () => {
    try {
      await rocording.stopAndUnloadAsync();
      alert('Stop the recording!');
    } catch (error) {
      alert('stopError');
    }
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
