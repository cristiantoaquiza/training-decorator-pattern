import { AddOn } from './AddOn'
import { Beverage } from '../beverages/Beverage'

export class Sugar extends AddOn {
  constructor(beverage: Beverage) {
    super('Sugar', beverage)
  }

  get description(): string {
    return `${this.beverage.description} with Mocha`
  }

  cost(): number {
   return this.beverage.cost() + 50
  }
}
