const showCards = (function() {
  if(!document.querySelector('#bannerSection')) {
    return;
  } // remove befor build

  const bannerSection = document.querySelector('#bannerSection');
  const allDisabledCards = bannerSection.querySelectorAll('.disable');
  const viewAllCardLink = document.getElementById('viewAllCardLink');

  viewAllCardLink.addEventListener('click', showAllCards, false);

  function showAllCards(evt) {
    evt.preventDefault();
    allDisabledCards.forEach(item => item.classList.toggle('disable'))
  }
})();