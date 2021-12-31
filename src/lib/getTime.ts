import getWord from './getWord';

const getTime = (): string => {
  const today = new Date();
  const finalDate = new Date('2023-03-23');
  const oneDay = 1000 * 60 * 60 * 24;

  return getWord(Math.round((finalDate.getTime() - today.getTime()) / oneDay));
};

export default getTime();
