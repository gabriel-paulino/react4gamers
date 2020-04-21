import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

//const moviment = {
//  position: { x: 5, y: 5 },
//  direction: EDirection.RIGHT,
//};

interface IProps {
  initialPosition: { x: number; y: number }
};

const MiniDemon = (props: IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition);


  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * moviment.position.y - HEAD_OFFSET,
        left: TILE_SIZE * moviment.position.x,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: 'no-repeat',
        animation: 'mini-demon-animation 0.7s steps(4) infinite',
        transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  )
}

export default MiniDemon;