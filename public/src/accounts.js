function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  books.forEach((book) => book.borrows.forEach((borrow) => {
    borrow.id === account.id && result++;
  }));
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOutByAccount = books.filter((book) => (
    book.borrows.some((borrow) => borrow.id === account.id && borrow.returned === false)
  ));
  booksCheckedOutByAccount.forEach((book) => {
    book.author = authors.find((author) => book.authorId === author.id);
  })
  return booksCheckedOutByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
