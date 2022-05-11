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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
