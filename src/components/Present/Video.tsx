import React from 'react';
import {
  CardVideo,
  CardVideoImg,
  CardVideoLink,
  CardVideoName,
  PresentContent
} from './style';

const video = [
  {
    link: 'https://youtu.be/aTPPmHqMZOw',
    src: 'img/witcher.s02tr01.jpg',
    title: 'Русский трейлер #1'
  },
  {
    link: 'https://youtu.be/PQ59CmCyOk4',
    src: 'img/witcher.s02tr02.jpg',
    title: 'Русский трейлер #2'
  },
  {
    link: 'https://youtu.be/Si65KjkMy8s',
    src: 'img/witcher.s02tiz01.jpg',
    title: 'Тизер оригинальная озвучка'
  }
];

const Video = (): JSX.Element => {
  return (
    <PresentContent>
      {video.map((item, index) => (
        <CardVideo key={index}>
          <CardVideoLink href={item.link}>
            <figure>
              <CardVideoImg src={item.src} alt={item.title} />
              <CardVideoName>{item.title}</CardVideoName>
            </figure>
          </CardVideoLink>
        </CardVideo>
      ))}
    </PresentContent>
  );
};

export default Video;
