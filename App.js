import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ApplicationLoading } from 'expo';
import { bootstap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <ApplicationLoading
        startAsync={bootstap}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={error => console.log(error)}
      />
    );
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
