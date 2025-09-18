/*
    ===== Código de TypeScript =====
*/
interface superHeroe {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address {
    street:string,
    countrie:string,
    city:string
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        countrie: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + 'vive en ' + this.address.city + ', ' + this.address.countrie;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};