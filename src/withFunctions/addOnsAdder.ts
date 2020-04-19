import { Beverage } from './beveragesMaker'

export const withMilk = (beverage: Beverage): Beverage => {
  return {
    ...beverage,
    description: `${beverage.description} with Milk`,
    cost: beverage.cost + 100,
  }
}

export const withSugar = (beverage: Beverage): Beverage => {
  return {
    ...beverage,
    description: `${beverage.description} with Mocha`,
    cost: beverage.cost + 50,
  }
}
