'use strict';
const aixos = require('axios');
let apiKey;
const baseUrl = 'http://marketdata.websol.barchart.com';

const _request = (opts) => {
  opts.url = baseUrl + opts.url;
  opts.params = opts.params || {};
  opts.params.key = apiKey;
  opts.headers = opts.headers || {};
  opts.headers['User-Agent'] = 'BarchartOndemandMarketDataAPI NodeJS Client';

  return aixos(opts).then(function (resp) {
    if (resp.data.status.code === 204) {
      return [];
    } else if (resp.data.status.code !== 200) {
      throw new Error('Error on Barchart Response');
    } else {
      return resp.data.results;
    }
  }).catch(function (resp) {
    throw new Error(resp.statusText || resp.status || resp.response.data || 'Bad request');
  });
};

/*
* @param {String} key API key used to authenticate with Barchart
* */
module.exports = (key) => {

  var module = {};
  apiKey = key;
  /**
   * The getHistory API is used to request historical time series data on stocks,
   * indices, mutual funds, ETFs, futures, indices or forex pairs. Historical data
   * is available as tick, minute or end-of-day data.
   * @param  {String} symbol    [description]
   * @param  {String} [type]    [description]
   * @param  {Object} [options] All additional options as key value
   * @return {Promise}
   * @see http://www.barchartondemand.com/api/getHistory
   */
  module.getHistory = (symbol, type, options) => {
    type = type || 'daily';
    if (!symbol) {
      throw new Error('Symbol not provided!');
    }
    const opts = {};
    opts.params = options || {};
    opts.params.symbol = symbol;
    opts.params.type = type;
    opts.url = '/getHistory.json';
    return _request(opts);
  };
  /**
   * The getQuote API is used to request price data, either real-time, delayed or
   * end-of-day, by symbol. In addition to Last Price or Settlement, other fields
   * such as Open, High, Low, Close, Bid, Ask, 52-week high and low, and more are
   * available.
   * @param  {String} symbols   A symbol or code that identifies a financial
   * instrument. Multiple symbols separated by a comma may be used.
   * @param  {String} [fields]  The fields requested.
   * @param  {String} [mode]    Parameter to change quote type to real-time ("R"),
   * delayed ("I") or end-of-day ("D")
   * @see http://www.barchartondemand.com/api/getQuote
   */
  module.getQuote = (symbols, fields, mode) => {
    if (!symbols) {
      throw new Error('Symbols not provided!');
    }
    const opts = {
      url: '/getQuote.json',
      params: {
        symbols: symbols,
        fields: fields,
        mode: mode
      }
    };
    return _request(opts);
  };

  return module;
};
