import { KeySystemFactory } from './keysystemFactory';
import { KeySystems } from './types';

const init = () => {
  const keyFactory = new KeySystemFactory();
  const ks = keyFactory.getKeySystem(KeySystems.glutz);
  ks.getUser();
};

init();
