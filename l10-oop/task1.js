import {Book} from './Book.js';
import {EBook} from './EBook.js';

//кілька об'єктів для класу Book та виклик printInfo для кожного екземпляру.
const book1 = new Book("Гаррі Поттер і філософський камінь", "Дж.К. Роулінг", 1997);
const book2 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1966);
const book3 = new Book("Володар кілець", "Дж. Р. Р. Толкін", 1955);

book1.printInfo();
book2.printInfo();
book3.printInfo();

//кілька об'єктів для класу ЕBook та виклик printInfo для кожного екземпляру.
const ebook1 = new EBook("Гаррі Поттер і філософський камінь", "Дж.К. Роулінг", 1997, ".pdf");
const ebook2 = new EBook("Майстер і Маргарита", "Михайло Булгаков", 1966, ".pdf, .txt");
const ebook3 = new EBook("Володар кілець", "Дж. Р. Р. Толкін", 1955, ".doc");

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();

//Використання геттерів 
console.log(book1.title); 
console.log(ebook1.format);

//Використання cеттерів
ebook1.format = '.csv';
console.log(ebook1.format);
ebook1.printInfo();

//статичний метод в Book
const books = [
  new Book("Кобзар", "Тарас Шевченко", 1840),
  new EBook("Гаррі Поттер", "Дж.К. Роулінг", 1997, ".pdf"),
  new Book("Майстер і Маргарита", "Михайло Булгаков", 1966),
  new EBook("Володар кілець", "Дж. Р. Р. Толкін", 1955, ".epub")
];

const oldestBook = Book.getOldestBook(books);
oldestBook.printInfo();

//статичний метод в EBook
const paperBook = new Book("1984", "Джордж Орвелл", 1949);

const ebook = EBook.fromBook(paperBook, ".epub");
ebook.printInfo();