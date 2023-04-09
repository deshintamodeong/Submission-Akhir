import prayers from './prayers .js';

class DataSource {
  static searchPray(keyword) {
    return new Promise((resolve, reject) => {
      const filteredPrayers = prayers.filter(pray => pray.name.toUpperCase().includes(keyword.toUpperCase()));
      
      if (filteredPrayers.length) {
        resolve(filteredPrayers);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;