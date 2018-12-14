const scraper = require('./scraper');

for (let index = 0; index < 10; index++) {
  scraper('https://www.whitepages.com/business/NY/Bronx/dufour-pastry-kitchens-inc/b-1a7i7jp');
}