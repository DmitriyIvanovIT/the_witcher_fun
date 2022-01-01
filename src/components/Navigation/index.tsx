import React, { useEffect, useState } from 'react';
import {
  BurgerLine,
  BurgerMenu,
  NavigationItem,
  NavigationLink,
  NavigationList,
  NavigationStyle
} from '@/components/Navigation/style';

import NetflixIcon from '%/img/icons/netflix.svg';
import OkkoIcon from '%/img/icons/okko.svg';
import KinopoiskIcon from '%/img/icons/kinopoisk.svg';

const Navigation = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  const handledWidthWindow = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    handledWidthWindow();

    window.addEventListener('resize', handledWidthWindow);
  }, []);

  return (
    <NavigationStyle>
      <BurgerMenu
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? 'active' : ''}
      >
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerMenu>
      <NavigationList className={isOpen ? 'active' : ''}>
        <NavigationItem>
          <NavigationLink href="https://www.netflix.com/ru/" target="_blank">
            <NetflixIcon className="netflix" />
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink href="https://okko.tv/" target="_blank">
            <OkkoIcon className="okko" />
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink href="https://www.kinopoisk.ru/" target="_blank">
            <KinopoiskIcon className="kinopoisk" />
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationStyle>
  );
};

export default Navigation;
