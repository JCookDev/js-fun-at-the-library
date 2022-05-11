function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns}
};

function saveReview(review, reviewList) {
  if (reviewList.includes(review)) {
    return;
  } else {
    reviewList.push(review);
  }
}

function calculatePageCount(book) {
  pages = (20 * book.length);
  return pages;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
  return book;
}

function editBook(book) {
  book.pageCount -= (book.pageCount * 0.25);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
