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

const r1 = formString('HELLO');
// console.log(r1);


// problem 2
interface Book {
    title: string;
    rating: number;
};

const filterByRating = (books: Array<Book>) => {
    if (!books) {
        return;
    } else {
        return books.filter(book => book.rating > 4);
    }
};

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

const r2 = filterByRating(books);
// console.log(r2);