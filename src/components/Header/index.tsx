import React, { useEffect, useState } from 'react';
import { HeaderStyle, HeaderTimer } from '@/components/Header/style';
import Logo from '%/img/icons/logo.svg';
import getTime from '@/lib/getTime';
import Navigation from '@/components/Navigation';

const Header = (): JSX.Element => {
  const [date, setDate] = useState<string>('...');

  useEffect(() => {
    setDate(getTime);
  }, []);

  return (
    <HeaderStyle>
      <Logo />
      <HeaderTimer>До выхода 3 сезона осталось {date}</HeaderTimer>
      <Navigation />
    </HeaderStyle>
  );
};

export default Header;
