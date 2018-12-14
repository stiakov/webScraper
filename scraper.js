module.exports = function(url) {
  const Nightmare = require('nightmare');
  const nightmare = new Nightmare({ show: true });

  nightmare
    .goto(url)
    .wait('ul.secondary-content.results')
    // .click('a.link-wrapper')
    // .wait('.module.contact-info')
    .evaluate(() => document.querySelector('ul.secondary-content.results').innerText)
    // .end()
    .then((result) => {
      console.log(result);

    }).catch((err) => console.log(err));
}