class DataSource {
  static searchPray(keyword) {
    return fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;

