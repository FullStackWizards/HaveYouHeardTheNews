// methods for getting filtered data from the DB
import fetch from 'isomorphic-fetch';
import { checkStatus } from '../../server/apiModels/lib/util.js';

export function fetchDatedArticles(startDate, endDate) {
  /*grab articles from db that are within a given date range*/
  return fetch('/datedArticles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ startDate: startDate, endDate: endDate })
  })
  .then(checkStatus);
}

export function fetchAllSources() {
  /*grab articles from db that are within a given date range*/
  return fetch('https://newsapi.org/v1/sources')
    .then(resp => resp.json().then(x => x.sources.map(source => source.id)))
}

export function fetchAllArticles(source) {
  console.log('fetching articles for', source)
  return fetch(`https://newsapi.org/v1/articles/?source=${source}&apiKey=230b53e7dc294643b8a26493f04f49e0`, { method: 'GET' })
      .then(resp => resp.json());
}
