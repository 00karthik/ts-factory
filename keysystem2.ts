import { KeySystem } from './types';

export class KeySystem2 implements KeySystem {
  public getUser(): void {
    console.log('get 2');
  }

  public updateUser(): void {
    console.log('update 2');
  }
}
