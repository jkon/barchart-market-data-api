'use strict';


const should = require('should');
const mocha = require('mocha');

const APIKEY = process.env.APIKEY;

if (!APIKEY) {
  throw new Error('APIKEY not provided');
}

const md = require('../')(APIKEY);

describe('MarketData', function () {

  describe('#getHistory', function () {
    it('should return an Array of data', function (done) {
      md.getHistory('AAPL').then(function (history) {
        history.should.be.instanceof(Array);
        console.log(history);
        done();
      });
    });
  });
  describe('#getQuote', function () {
    it('should return an Array of data', function (done) {
      md.getQuote('IBM').then(function (quotes) {
        quotes.should.be.instanceof(Array);
        console.log(quotes);
        done();
      });
    });
  });
});
