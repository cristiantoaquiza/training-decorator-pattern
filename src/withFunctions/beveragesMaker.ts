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
