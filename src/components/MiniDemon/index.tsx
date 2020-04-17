import React from 'react';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

import './index.css';

const MiniDemon = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: TILE_SIZE * 8,
        left: TILE_SIZE * 4,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundRepeat: 'no-repeat',
        animation: 'mini-demon-animation 0.7s steps(4) infinite'
      }}
    />
  )
}

export default MiniDemon;