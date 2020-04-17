import useEventListener from '@use-it/event-listener';
import React from 'react';
import { TILE_SIZE, HERO_HELMET_OFFSET } from '../../settings/constants';

import './index.css';

const initialPosition = {
  x: 15,
  y: 15
};

const Hero = () => {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState('RIGHT');

  useEventListener('keydown', (event) => {

    if (event.key === 'ArrowLeft') {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
      updateDirectionState('LEFT');

    } else if (event.key === 'ArrowRight') {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
      updateDirectionState('RIGHT');

    } else if (event.key === 'ArrowDown') {
      updatePositionState({ x: positionState.x, y: positionState.y - 1 });

    } else if (event.key === 'ArrowUp') {
      updatePositionState({ x: positionState.x, y: positionState.y + 1 });
    }
  })

  /*
    setTimeout(() => {
      const newPosition = { x: 14, y: 15 };
      updatePositionState(newPosition);
    }, 2000)*/

  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * positionState.y,
        left: TILE_SIZE * positionState.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HERO_HELMET_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundPosition: `0px -${TILE_SIZE - HERO_HELMET_OFFSET}px`,
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 0.7s steps(4) infinite',
        transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
      }}
    />
  )
}

export default Hero;