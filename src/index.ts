import { CoffeeShop } from './withOOP/CoffeeShop'
import {
  orderHouseBlendWithMilkAndSugar,
  orderDarkRoastWithSugarAndMilk,
} from './withFunctions/coffeeShop'

const decoratorWithOOP = new CoffeeShop().orderHouseBlendWithMilkAndSugar()
console.log('with OOP', decoratorWithOOP)

const decoratorWithOOP2 = new CoffeeShop().orderDarkRoastWithMilkAndSugar()
console.log('with OOP', decoratorWithOOP2)

const decoratorWithFunctions = orderHouseBlendWithMilkAndSugar()
console.log('with Functions', decoratorWithFunctions)

const decoratorWithFunctions2 = orderDarkRoastWithSugarAndMilk()
console.log('with Functions', decoratorWithFunctions2)
