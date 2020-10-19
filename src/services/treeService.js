import {baseUrl} from "../config.js"

/*
* Fetch data
* Can be moved as a common util under "/utils"
*/
const fetchData = async (url) => {
  console.log(url);
  return new Promise(function (res, rej) {
    fetch(url)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Service response with unexpected status: ' + response.status);
            res(null);
          }

          // success response
          response.json().then(function(data) {
            console.log("Successfully fetched data.");
            if(data.status) {
              res(data.responseData);
            }
            res(null);
          });
        }
      )
      .catch(function(err) {
        console.log('Some error occured', err);
      });
  });
}

class TreeService {
  async getData() {
    const reqId = "5cff79fc3200007100eac68f";
    return await fetchData(baseUrl + reqId);
  }
}

export const treeService = new TreeService();
