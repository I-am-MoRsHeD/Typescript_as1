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


