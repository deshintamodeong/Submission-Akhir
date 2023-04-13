import '../component/pray-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const prayListElement = document.querySelector('pray-list');
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchPray(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = results => {
    prayListElement.prayers = results;
  };
 
  const fallbackResult = message => {
    prayListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;
