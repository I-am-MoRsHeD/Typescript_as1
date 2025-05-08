// problem 1
const formString = (param: string, toUpper?: boolean): string => {
    if (toUpper === false) {
        return param.toLowerCase();
    } else if (toUpper) {
        return param.toUpperCase();
    } else {
        return param.toUpperCase();
    }
};

const p1 = formString('HELLO');
// console.log(p1);


// problem 2
interface Book {
    title: string;
    rating: number;
};

const filterByRating = (books: Array<Book>): Array<Book> => {
    if (!books) {
        return [];
    } else {
        return books.filter(book => book.rating > 4);
    }
};

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

const p2 = filterByRating(books);
// console.log(p2);


// problem 3
const concatenateArrays = <T>(...arrays: Array<T>[]): Array<T> => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
};


// const ar1 = ['a', 'b', 'c'];
// const ar2 = ["1"];
// const p3: Array<string> = concatenateArrays(ar1, ar2);
// console.log(p3);


// problem 4
class Vehicle {
    private make: string;
    private year: string;

    constructor(make: string, year: string) {
        this.make = make;
        this.year = year;
    };

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`
    }
};

class Car extends Vehicle {
    private model: string;

    constructor(model: string, make: string, year: string) {
        super(make, year);
        this.model = model;
    };

    getModel(): string {
        return `Model: ${this.model}`
    }
}

const p4 = new Car("Mustang", "Ford", "2022");
// console.log(p4.getInfo());
// console.log(p4.getModel());


// problem 5
const processValue = (value: string | number): number => {
    if (typeof value === 'string') {
        return value.length
    } else {
        return value * 2;
    };
}

const p5 = processValue(20);
// console.log(p5);