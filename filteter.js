const Books = [
    { tittle: 'Bookone', genre: 'history', publish: 1895, Edition: 2009},
    { tittle: 'Booktwo', genre: 'history', publish: 2024, Edition: 2024},
    { tittle: 'Bookthree', genre: 'Economics', publish: 2022, Edition: 1999},
    { tittle: 'Bookfour', genre: 'Polity', publish: 2014, Edition: 2015},
    { tittle: 'Bookfive', genre: 'Geography', publish: 1990, Edition: 2023},
    { tittle: 'Booksix', genre: 'history', publish: 2001, Edition: 2020},
    { tittle: 'Bookseven', genre: 'Economics', publish: 2000, Edition: 2024},
    { tittle: 'Bookeight', genre: 'Polity', publish: 1995, Edition: 2025},
];

// let userbooks = Books.filter((kithaab) => kithaab.genre==='hisytory')
// console.log(userbooks);  // only give the empty aarays

const bookDetails = Books.filter((kitaab) => {
    return kitaab.publish>=2000 && kitaab.genre === "history","Economics","Geography"
});

// console.log(bookDetails);

// *****************************      new prog...

const variable = [1,2,3,,4,5,6,7,8,9,10]
const newValue = variable.map((newValue) => newValue + 10)
console.log(newValue);

const value = variable.map((num)=> {
    return num+10
});
console.log(value);