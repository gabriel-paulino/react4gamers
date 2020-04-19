import useEventListener from '@use-it/event-listener';
import useHeroMoviment from '../../hooks/useHeroMoviment';
import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import './index.css';


const initialPosition = {
  x: 2,
  y: 3
};

const Hero = () => {
  //Desestruturação : destructuring
  const { position, direction } = useHeroMoviment(initialPosition);

  /*
    setTimeout(() => {
      const newPosition = { x: 14, y: 15 };
      updatePositionState(newPosition);
    }, 2000)*/

  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * position.y,
        left: TILE_SIZE * position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 0.7s steps(4) infinite',
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}
    />
  )
}

export default Hero;