function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  var bookTitles = [];
  for (var i = 0; i < shelf.length; i++) {
    bookTitles.push(shelf[i].title);
  }
  return bookTitles.join(", ");
}

function searchShelf (shelf, bookTitle) {
  var bookAvailable = null;

  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle){
      return bookAvailable = true;
    } else {
      bookAvailable = false;
    }
  }
  return bookAvailable;
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
