export interface Beverage {
  description: string
  cost: number
}

export const makeHouseBlend = (): Beverage => {
  return {
    description: 'House Blend',
    cost: 250,
  }
}

export const makeDarkRoast = (): Beverage => {
  return {
    description: 'Dark Roast',
    cost: 300,
  }
}
