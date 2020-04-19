import { makeHouseBlend, makeDarkRoast } from './beveragesMaker'
import { withMilk, withSugar } from './addOnsAdder'
import { flow } from 'lodash/fp'

export const orderHouseBlendWithMilkAndSugar = () => {
  const houseBlend = makeHouseBlend()
  const withMilkAddOn = withMilk(houseBlend)
  const withSugarAddOn = withSugar(withMilkAddOn)
  return {
    houseBlend: `${houseBlend.description}: ${houseBlend.cost}`,
    milkAddOn: `${withMilkAddOn.description}: ${withMilkAddOn.cost}`,
    sugarAddOn: `${withSugarAddOn.description}: ${withSugarAddOn.cost}`,
  }
}

export const orderDarkRoastWithSugarAndMilk = () => {
  const darkRoast = makeDarkRoast()
  const withSugarAddOn = withSugar(darkRoast)
  const withMilkAddOn = withMilk(withSugarAddOn)
  return {
    darkRoast: `${darkRoast.description}: ${darkRoast.cost}`,
    sugarAddOn: `${withSugarAddOn.description}: ${withSugarAddOn.cost}`,
    milkAddOn: `${withMilkAddOn.description}: ${withMilkAddOn.cost}`,
  }
}

export const orderDarkRoastWithSugarAndMilk2 = () => {
  const darkRoast = flow(makeDarkRoast, withSugar, withMilk)()
  return {
    flowedDarkRoast: `${darkRoast.description}: ${darkRoast.cost}`,
  }
}
