import { HouseBlend } from './beverages/HouseBlend'
import { Milk } from './addOns/Milk'
import { Sugar } from './addOns/Sugar'
import { DarkRoast } from './beverages/DarkRoast'

export class CoffeeShop {
  orderHouseBlendWithMilkAndSugar(): any {
    const houseBlend = new HouseBlend()
    const milkAddOn = new Milk(houseBlend)
    const sugarAddOn = new Sugar(milkAddOn)
    return {
      houseBlend: `${houseBlend.description}: ${houseBlend.cost()}`,
      milkAddOn: `${milkAddOn.description}: ${milkAddOn.cost()}`,
      sugarAddOn: `${sugarAddOn.description}: ${sugarAddOn.cost()}`,
    }
  }

  orderDarkRoastWithMilkAndSugar(): any {
    const darkRoast = new DarkRoast()
    const milkAddOn = new Milk(darkRoast)
    const sugarAddOn = new Sugar(milkAddOn)
    return {
      darkRoast: `${darkRoast.description}: ${darkRoast.cost()}`,
      milkAddOn: `${milkAddOn.description}: ${milkAddOn.cost()}`,
      sugarAddOn: `${sugarAddOn.description}: ${sugarAddOn.cost()}`,
    }
  }
}
