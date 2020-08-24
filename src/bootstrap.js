import * as Font from 'expo-font';

export async function bootstap() {
  await Font.loadAsync({
    'os-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'os-regular:': require('../assets/fonts/OpenSans-Requlal.ttf'),
  });
}
