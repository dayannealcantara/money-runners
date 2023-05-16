import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import {colors} from './src/assets/theme.json'
import { Provider as StoreProvider} from 'react-redux';

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

import Routes from './src/routes';
import store from './src/store';

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
    <StoreProvider store={store}>
      <ThemeProvider theme={colors}>
        <PaperProvider>
          <Routes/>     
        </PaperProvider>
      </ThemeProvider>
    </StoreProvider>   
  )
}

registerRootComponent(App);
