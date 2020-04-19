import React from 'react';
import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { GAME_SIZE } from '../../settings/constants';


const Board = () => {
  return (
    <div>
      <Trap />
      <Chest />
      <Demon />
      <MiniDemon initialPosition={{ x: 5, y: 8 }} />
      <MiniDemon initialPosition={{ x: 10, y: 10 }} />
      <Hero />
      <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
}

export default Board;