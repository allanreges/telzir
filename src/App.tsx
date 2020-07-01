import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

import { DataProvider } from './context/index';

const App: React.FC = () => (
  <DataProvider>
    <Home />
    <GlobalStyle />
  </DataProvider>
);

export default App;
