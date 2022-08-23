import 'reflect-metadata';

export interface Type<T> {
  new (...args: Array<any>): T;
}

export default function Injectable() {
  return function <T>(target: Type<T>) {
    Reflect.getMetadata('design:paramtypes', target);
    console.log(Reflect.getMetadata('design:paramtypes', target));
  };
}
