import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import {colors} from './src/assets/theme.json'

import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic
 } from '@expo-google-fonts/ubuntu';

import Tour from './src/pages/Tour';

const App = () => {

  let [fontsLoaded] =useFonts({
    Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded){
    return null
  }
  
  return (
    <ThemeProvider theme={colors}>
      <PaperProvider>
        <Tour/>
      </PaperProvider>
    </ThemeProvider>
  )
}

registerRootComponent(App);
