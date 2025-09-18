// Funciones en TypeScript

/*
function multiplyNumbers(a: number, b: number,c:number=2): number {
    return (a + b) * c;
}   

let result = multiplyNumbers(5, 10);
console.log('Result of multiplication:', result);
*/

interface Character {
    name: string;
    hp: number;
    shohHp: () => void;
}


const healtCaracter = (character:Character, amount:number)=> {
    character.hp += amount;
}


const strider:Character = {
    name: 'Strider',
    hp: 100,
    shohHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }   
}

healtCaracter(strider, 20);
strider.shohHp();

export {}; // Evitar conflictos con otros archivos