import { makeHouseBlend } from './beveragesMaker'
import { withMilk, withSugar } from './addOnsAdder'

export const order = () => {
  const houseBlend = makeHouseBlend()
  const withMilkAddOn = withMilk(houseBlend)
  const withSugarAddOn = withSugar(withMilkAddOn)
  return {
    houseBlend: `${houseBlend.description}: ${houseBlend.cost}`,
    milkAddOn: `${withMilkAddOn.description}: ${withMilkAddOn.cost}`,
    sugarAddOn: `${withSugarAddOn.description}: ${withSugarAddOn.cost}`,
  }
}
