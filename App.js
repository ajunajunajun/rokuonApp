import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentWillMount() {
    this._init();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={this._soundStart}
          title="soundStart"
        />
        <Button
          onPress={this._recordStart}
          title="recordStart"
        />
        <Button
          onPress={this._recordStop}
          title="recordStop"
        />
      </View>
    );
  }

  _init = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });
    } catch (error) {
      alert(error);
    }
  }
  _soundStart = async () => {
    const soundObject = new Audio.sound();
    try {
      await soundObject.loadAsync(require('./assets/sounds/sample.mp3'));
      await soundObject.playAsync();
      alert('You are now recording!');
    } catch (error) {
      alert('soundStartError');
    }
  }
  _recordStart = async () => {
    const recordObject = new Audio.Recording();
    try {
      await recordObject.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recordObject.startAsync();
      alert('You are now recording!');
    } catch (error) {
      alert('recordStartError');
    }
  }
  _recordStop = async () => {
    try {
      await recordObject.stopAndUnloadAsync();
      alert('Stop the recording!');
    } catch (error) {
      alert('recordStopError');
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
