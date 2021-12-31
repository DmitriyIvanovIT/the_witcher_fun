import React from 'react';
import {
  NavigationItem,
  NavigationLink,
  NavigationList,
  NavigationStyle
} from '@/components/Navigation/style';

import NetflixIcon from '%/img/icons/netflix.svg';
import OkkoIcon from '%/img/icons/okko.svg';
import KinopoiskIcon from '%/img/icons/kinopoisk.svg';

const Navigation = (): JSX.Element => (
  <NavigationStyle>
    <NavigationList>
      <NavigationItem>
        <NavigationLink href="https://www.netflix.com/ru/" target="_blank">
          <NetflixIcon />
        </NavigationLink>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="https://okko.tv/" target="_blank">
          <OkkoIcon />
        </NavigationLink>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="https://www.kinopoisk.ru/" target="_blank">
          <KinopoiskIcon />
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
  </NavigationStyle>
);

export default Navigation;
