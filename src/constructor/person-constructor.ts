import Injectable from '../di/injectable';
import { AddressService } from '../services/address-service';
import { PersonService } from '../services/person-service';

@Injectable()
export class PersonConstructor {
  constructor(
    public personService: PersonService,
    public addressService: AddressService
  ) {}
}
