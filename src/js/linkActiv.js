const activLink = (function() {
  const linkList = document.querySelector('#mobileMenuList');
  let link = document.URL
  const a = linkList.getElementsByTagName('a');

  for (let i = 0; i < a.length; i++) {
    if(a[i].classList.contains('active-link')) {
      a[i].classList.remove('active-link');
    }
    let href ='https://john-creative-technoligist.netlify.app/' + a[i].getAttribute('href');
    console.log("href", href);
    console.log('link', link);
    if(href == link) a[i].classList.add('active-link');
  }

})();