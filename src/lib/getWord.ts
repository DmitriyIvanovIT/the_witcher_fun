const text_forms = ['день', 'дня', 'дней'];

const getWord = (num: number): string => {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return num + ' ' + text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return num + ' ' + text_forms[1];
  }
  if (n1 == 1) {
    return num + ' ' + text_forms[0];
  }
  return num + ' ' + text_forms[2];
};

export default getWord;
