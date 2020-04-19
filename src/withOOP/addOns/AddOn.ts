import { Beverage } from '../beverages/Beverage'

export abstract class AddOn extends Beverage {
  protected beverage: Beverage

  constructor(description: string, beverage: Beverage) {
    super(description)
    this.beverage = beverage
  }

  abstract get description(): string
}
