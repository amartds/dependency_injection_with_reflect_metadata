import { PersonConstructor } from '../constructor/person-constructor';
import { Injector } from '../di/injector';
// bootstrap aplication
const person = Injector.resolve(PersonConstructor);
person.personService.foo();
person.addressService.bar();
