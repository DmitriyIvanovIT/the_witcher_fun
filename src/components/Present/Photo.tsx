import React from 'react';
import {CardPhoto, CardPhotoImg, PresentContent} from './style';

const photo = [
  'img/versus.jpg',
  'img/geralt.jpg',
  'img/cirilla.jpg',
  'img/kadrs2.jpg'
];

const Photo = (): JSX.Element => {
  return (
    <PresentContent>
      {photo.map((item, index) => (
        <CardPhoto key={index}>
          <CardPhotoImg src={item} alt={`Photo ${index + 1}`} />
        </CardPhoto>
      ))}
    </PresentContent>
  );
};

export default Photo;
