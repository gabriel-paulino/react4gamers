import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Trap = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: TILE_SIZE * 6,
        left: TILE_SIZE * 1,
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/TRAP.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 2s steps(8) infinite'
      }}
    />
  )
}

export default Trap;