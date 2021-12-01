function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = [];
  let returned = [];
  let allBooks = [];
  books.forEach((book) => {
    if (book.borrows[0].returned) {
      borrowed.push(book);
    } else {
      returned.push(book);
    }
  });
  allBooks.push(returned);
  allBooks.push(borrowed);
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const listOfBorrowers = borrows.map(({ id, returned }) => {
    const account = accounts.find((account) => account.id === id);
    return { ...account, returned }
  });
  return listOfBorrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
