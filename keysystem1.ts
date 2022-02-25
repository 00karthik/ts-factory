import { KeySystem } from './types';

export class KeySystem1 implements KeySystem {
  public getUser(): void {
    const response = this.initKeySystem();
    console.log(response);
  }

  public updateUser(): void {
    console.log('update 1');
  }

  private initKeySystem(): string {
    return 'get 1';
  }
}
