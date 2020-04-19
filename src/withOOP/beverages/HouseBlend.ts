import { Beverage } from './Beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super('House Blend')
  }

  cost(): number {
    return 250
  }
}
