import { HouseBlend } from './beverages/HouseBlend'
import { Milk } from './addOns/Milk'
import { Sugar } from './addOns/Sugar'

export class CoffeeShop {
  order(): any {
    const houseBlend = new HouseBlend()
    const milkAddOn = new Milk(houseBlend)
    const sugarAddOn = new Sugar(milkAddOn)
    return {
      houseBlend: `${houseBlend.description}: ${houseBlend.cost()}`,
      milkAddOn: `${milkAddOn.description}: ${milkAddOn.cost()}`,
      sugarAddOn: `${sugarAddOn.description}: ${sugarAddOn.cost()}`,
    }
  }
}
