import { Type } from './injectable';

export class Injector {
  private static container = new Map<string, any>();

  static resolve<T>(target: Type<T>) {
    if (this.container.has(target.name)) {
      return Injector.container.get(target.name);
    }
    const tokens = Reflect.getMetadata('design:paramtypes', target) || [];
    const injections = tokens.map((token: Type<any>): any =>
      this.resolve(token)
    );
    //console.log(...injections);
    const instance = new target(...injections);
    this.container.set(target.name, instance);
    return instance;
  }
}
