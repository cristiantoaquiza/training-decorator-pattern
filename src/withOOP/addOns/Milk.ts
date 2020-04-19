import { AddOn } from './AddOn'
import { Beverage } from '../beverages/Beverage'

export class Milk extends AddOn {
  constructor(beverage: Beverage) {
    super('Milk', beverage)
  }

  get description(): string {
    return `${this.beverage.description} with Milk`
  }

  cost(): number {
   return this.beverage.cost() + 100
  }
}
