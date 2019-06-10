const PAGING = 10

/**
 * Prepare data to use
 * @param {Object} json
 * @return {Promise<{total: number, data: Array}>}
 */
export const getData = page => {
  let json = require('./dataOne.json')
  const { total } = json
  let start = Math.min(PAGING * page, total)
  const data = json.data.slice(start, PAGING)
  return Promise.resolve({ total, data })
}

/**
 * Avoid try/catch constructions. Wrap any promise and return other promise.
 * That new promise is always successful and returns array in format "[error, result]"
 * where "error" is possible caught error of original promise and "result" is possible result.
 * @param {Promise} promise
 * @return {Promise}
 * @example
 *   import forAsync from 'for-async';
 *   // ...
 *   const [error, result] = await forAsync(response.json());
 */
export const forAsync = promise => promise
  .then(result => [null, result])
  .catch(error => [error, null])
