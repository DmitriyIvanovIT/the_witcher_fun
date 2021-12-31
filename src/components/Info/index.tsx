import React from 'react';
import {
  InfoButton,
  InfoDescription,
  InfoStyle,
  InfoTitle
} from '@/components/Info/style';

const Info = (): JSX.Element => {
  return (
    <InfoStyle>
      <InfoTitle>Ведьмак</InfoTitle>
      <InfoDescription>
        Те, кто связан предназначением, всегда найдут друг друга
      </InfoDescription>
      <InfoButton href="#" />
    </InfoStyle>
  );
};

export default Info;
