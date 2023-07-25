import dom from '../dom.js';
import searchHandler from '../handlers/searchHandler.js';

dom.search.addEventListener('keyup', () => {
    const input = dom.search.value;
    searchHandler(input);
});
