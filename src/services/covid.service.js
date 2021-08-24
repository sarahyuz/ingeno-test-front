import { API } from '../constants/api'
import moment from 'moment';

export const covidService = {
  summary, other
}

function summary(filter_date) {
  let date;
  switch(filter_date) {
    case 'day':
      date = moment().subtract(1, 'day').format("DD-MM-YYYY");
      break;
    case 'month':
      date = moment().subtract(1, 'month').format("DD-MM-YYYY");
      break;
    case 'semester':
      date = moment().subtract(1, 'quarter').format("DD-MM-YYYY");
      break;
    default:
      date = moment().subtract(1, 'day').format("DD-MM-YYYY");
      break;
  }

  let URL = API + "/summary?date=" + date
  return new Promise((resolve, reject) => {
      fetch(URL)
      .then(result => { 
        if (result.status >= 200 && result.status < 300) {
          return resolve(result.json()) 
        } else {
          var error = new Error(result.statusText || result.status)
          error.result = result
          reject(error)
        }
      })
      .catch(error => { reject(error) });
  })
}

function other() {
  let URL = API + "/other"
  return new Promise((resolve, reject) => {
      fetch(URL)
      .then(result => { 
        if (result.status >= 200 && result.status < 300) {
          return resolve(result.json()) 
        } else {
          var error = new Error(result.statusText || result.status)
          error.result = result
          reject(error)
        }
      })
      .catch(error => { reject(error) });
  })
}