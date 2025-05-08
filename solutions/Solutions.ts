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



const concatenateArrays = <T>(...arrays: Array<T>[]): Array<T> => {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
};


const ar1 = ['a', 'b', 'c'];
const ar2 = ["1"];
const p3: Array<string> = concatenateArrays(ar1, ar2);



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



const processValue = (value: string | number): number => {
    if (typeof value === 'string') {
        return value.length
    } else {
        return value * 2;
    };
}

const p5 = processValue(20);



interface Product {
    name: string;
    price: number;
};

const getMostExpensiveProduct = (product: Array<Product>) => {
    if (product.length === 0) {
        return null;
    } else {
        return product.reduce((acc, curr) => acc.price > curr.price ? acc : curr);
    }
}

const products = [
    { name: "Pen", price: 1000 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 500 }
];

const p6 = getMostExpensiveProduct(products);



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const getDayType = (day: Day): string => {
    if(day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend';
    } else {
        return 'Weekday';
    }
};

const p7 = getDayType(Day.Friday);



const squareAsync = async (value: number): Promise<number> => {
    if (value < 0) {
        throw new Error('Negative numbers are not allowed');
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value * value);
            }, 1000);
        })
    }
};

squareAsync(3).then(result => {

}).catch(err => {
  
});
