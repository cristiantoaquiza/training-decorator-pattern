import { Beverage } from './Beverage';

export class DarkRoast extends Beverage {
  constructor() {
    super('Dark Roast')
  }

  cost(): number {
    return 300
  }
}
