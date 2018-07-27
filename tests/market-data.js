'use strict';

const MarketData = require('../');
const should = require('should');
const mocha = require('mocha');

const APIKEY = process.env.APIKEY;

if (!APIKEY) {
  throw new Error('APIKEY not provided');
}

describe('MarketData', function () {
  describe('#getHistory', function () {
    it('should return an Array of data', function (done) {
      const md = new MarketData(APIKEY);
      md.getHistory('IBM').then(function (history) {
        history.should.be.instanceof(Array);
        console.log(history);
        done();
      });
    });
  });
  describe('#getQuote', function () {
    it('should return an Array of data', function (done) {
      const md = new MarketData(APIKEY);
      md.getQuote('IBM').then(function (quotes) {
        quotes.should.be.instanceof(Array);
        console.log(quotes);
        done();
      });
    });
  });
});
