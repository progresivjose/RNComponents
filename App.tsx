import 'react-native-gesture-handler';

import React from 'react';
import {Stack} from './src/navigators/Stack';
import {ThemeContextProvider} from './src/context/theme/ThemeContext';

const AppState = ({children}: any) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

const App = () => {
  return (
    <AppState>
      <Stack />
    </AppState>
  );
};

export default App;
