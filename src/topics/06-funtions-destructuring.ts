

export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150,
};  

const tablet: Product = {
  description: 'iPad Air',
  price: 350,
};


interface TaxCalculationOptions {
  products: Product[];
  tax: number;
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

export function taxCalculation(options: TaxCalculationOptions): [number, number] {


  let total = 0;
  options.products.forEach(product => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: tax });

console.log('Total: ', total);
console.log('Tax: ', taxTotal);


