import { KeySystem1 } from './keysystem1';
import { KeySystem2 } from './keysystem2';
import { KeySystem, KeySystems } from './types';

export const keySystemMap = {
  [KeySystems.glutz]: KeySystem1,
  [KeySystems.keySys2]: KeySystem2,
};

export class KeySystemFactory {
  public getKeySystem(keySystem: KeySystems): KeySystem {
    return new keySystemMap[keySystem]();
  }
}
