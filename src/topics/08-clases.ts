
export class Persona{

    public age: number;
    public lastName: string;
    public firstName: string;
    public height?: number;       


    constructor(age: number, lastName: string, firstName: string, height?: number){
        this.age = age;  
        this.lastName = lastName;
        this.firstName = firstName;
        this.height = height;
    }
}


export class Employee extends Persona{
     
    public department: string;
    public salary: number;  
    public position: string;
    public isActive: boolean;
    public hireDate: Date;
    public endDate?: Date;
    public boss?: Employee;
    public employees?: Employee[];
    public address?: string;
    public phone?: string;
    public legacyID?: number;

    constructor({
        age,
        lastName,
        firstName,
        height,
        department,
        salary,
        position,
        isActive,
        hireDate,
        endDate,
        boss,
        employees,
        address,
        phone,
        legacyID
    }: {
        age: number,
        lastName: string,
        firstName: string,
        height?: number,
        department: string,
        salary: number,
        position: string,
        isActive: boolean,
        hireDate: Date,
        endDate?: Date,
        boss?: Employee,
        employees?: Employee[],
        address?: string,
        phone?: string,
        legacyID?: number
    }) {
        super(age, lastName, firstName, height);
        this.department = department;
        this.salary = salary;
        this.position = position;
        this.isActive = isActive;
        this.hireDate = hireDate;
        this.endDate = endDate;
        this.boss = boss;
        this.employees = employees;
        this.address = address;
        this.phone = phone;
        this.legacyID = legacyID;
    }
}

console.log('Mi nombre es: ', new Persona(30, 'García', 'Juan', 1.75));
console.log('y los datos de mi empleado/a son: ', new Employee({
    age: 28,    
    lastName: 'Pérez',
    firstName: 'María',
    department: 'Ventas',       
    salary: 3000,
    position: 'Vendedora',
    isActive: true,
    hireDate: new Date('2022-01-15'),
    address: 'Calle Falsa 123',
    phone: '555-1234'
}));    

export{};