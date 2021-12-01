function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = 0;
  books.forEach((book) => {
    if (!book.borrows[0].returned) result++;
  });
  return result;
}

//helper function
function totalGenreCount(books, genre) {
  return books.reduce((total, book) => book.genre === genre ? total + 1 : total, 0);
}

function getMostCommonGenres(books) {
  const result = [];
  books.forEach((book) => {
    if (!result.some((element) => element.name === book.genre)) {
      result.push({
        name: book.genre,
        count: totalGenreCount(books, book.genre) // use of helper function 
      });
    }
  });
  return result.sort((genre1, genre2) => genre1.count > genre2.count ? -1 : 1).slice(0, 5);
}

function getMostPopularBooks(books) {
  const mostPopularBooks = books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  });
  return mostPopularBooks.sort((book1, book2) => book1.count > book2.count ? -1 : 1).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let authorInfo = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        authorInfo.count += book.borrows.length;
      }
    });
    result.push(authorInfo);
  });
  return result.sort((author1, author2) => author1.count > author2.count ? -1 : 1).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
