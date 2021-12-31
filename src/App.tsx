import React from 'react';

import { Container } from '@/components/Default';
import Header from '@/components/Header';
import Info from '@/components/Info';
import Present from '@/components/Present';

const App = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Info />
      <Present />
    </Container>
  );
};

export default App;
