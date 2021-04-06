const activLink = (function() {
  const linkList = document.querySelector('#mobileMenuList');
  let link = document.URL
  const a = linkList.getElementsByTagName('a');

  for (let i = 0; i < a.length; i++) {
    if(a[i].classList.contains('active-link')) {
      a[i].classList.remove('active-link');
    }
    let href = 'http://localhost:8081/' + a[i].getAttribute('href');
    if(href == link) a[i].classList.add('active-link');
  }

})();