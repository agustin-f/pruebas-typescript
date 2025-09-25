import type { Product } from "./06-funtions-destructuring";
import { taxCalculation } from "./06-funtions-destructuring";

const shoppingCart: Product[] = [
    { description: 'Nokia A1', price: 150 },
    { description: 'iPad Air', price: 350 }
];


const [total, tax] = taxCalculation({
    products: shoppingCart, 
    tax: 0.15
});


console.log('Total:', total);
console.log('Tax:', tax);
