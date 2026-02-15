import { Book } from './Book.js';

export class EBook extends Book {
	constructor(title, author, year, format) {
		super(title, author, year);
		this.format = format;
	}

	get format() {
		return this._format;
	}

	set format(value) {
		if (typeof value !== 'string' || value === '') {
			throw new Error('Формат файлу повинен бути виконаним');
		}
		this._format = value;
	}

	printInfo() {
		console.log(
			`Цю книгу "${this.title}" написав ${this.author} в році ${this.year}, книга достуна в ${this.format} форматі`,
		);
	}

	static fromBook(book, format) {
		return new EBook(book.title, book.author, book.year, format);
	}
}
