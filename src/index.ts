import { CoffeeShop } from './withOOP/CoffeeShop';
import { order } from './withFunctions/coffeeShop';

const decoratorWithOOOP = new CoffeeShop().order()
console.log('with OOP', decoratorWithOOOP)

const decoratorWithFunctions = order()
console.log('with Functions', decoratorWithFunctions)
