import React, { useState } from 'react';
import { PresentStyle, Tab, Tabs } from '@/components/Present/style';
import Video from '@/components/Present/Video';
import Photo from '@/components/Present/Photo';
import Products from '@/components/Present/Products';

const tabs = ['Видео', 'Фото', 'Мерч'];

const Present = () => {
  const [tab, setTab] = useState(tabs[0]);

  const getContent = () => {
    switch (tab) {
      case tabs[0]:
        return <Video />;
      case tabs[1]:
        return <Photo />;
      case tabs[2]:
        return <Products />;
      default:
        return <></>;
    }
  };

  return (
    <PresentStyle>
      <Tabs>
        {tabs.map((item, index) => (
          <Tab
            onClick={() => setTab(item)}
            className={tab === item ? 'active' : ''}
            disabled={tab === item}
            key={index}
          >
            {item}
          </Tab>
        ))}
      </Tabs>
      {getContent()}
    </PresentStyle>
  );
};

export default Present;
