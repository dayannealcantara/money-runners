import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import {colors} from './src/assets/theme.json'
import Tour from './src/pages/Tour';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <PaperProvider>
        <Tour/>
      </PaperProvider>
    </ThemeProvider>
  )
}

registerRootComponent(App);
