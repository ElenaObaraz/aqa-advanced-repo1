export class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	get title() {
		return this._title;
	}

	set title(value) {
		if (value === '') {
			throw new Error('Книга повинна мати назву');
		}
		this._title = value;
	}

	get author() {
		return this._author;
	}

	set author(value) {
		if (typeof value !== 'string' || value === '') {
			throw new Error('Книга повинна мати автора');
		}
		this._author = value;
	}

	get year() {
		return this._year;
	}

	set year(value) {
		if (typeof value !== 'number' || value <= 0) {
			throw new Error('Книга повинна мати рік видання');
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Цю книгу "${this.title}" написав ${this.author} в році ${this.year}`);
	}

	static getOldestBook(books) {
		return books.reduce((oldest, current) => {
			return current.year < oldest.year ? current : oldest;
		});
	}
}
