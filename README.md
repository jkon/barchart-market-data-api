## Barchart OnDemand Market Data API Client

Barchart offers free Market data API on [barchart.com/ondemand/free-market-data-api](https://www.barchart.com/ondemand/free-market-data-api),
to use the API you need an API key which is provided singing up on theirs website.

Barchart also offers a larger catalog of paid for APIs which you need an API key for that has been granted such access. This library currently only supports the free APIs, but I plan to eventually add support for some more of the paid ones as well.

This client offers access to free methods `getQuote` and `getHistory`.

This repo was forked from <a href="https://github.com/yagop/barchart-market-data-api">yagop/barchart-market-data-api</a> and updated to es6

### Example

```js
const MarketData = require('barchart-market-data-api');

const md = new MarketData(__YOUR_API_KEY__);
md.getHistory('IBM').then(function (history) {
  console.log('History data:', history);
});
md.getQuote('IBM').then(function (quotes) {
  console.log('Price data:', quotes);
});
```

<a name="MarketData"></a>
## MarketData(apiKey)
Creates a new client.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>String</code> | API key provided by Barchart |


* [MarketData(apiKey)](#MarketData)
  * [.getHistory(symbol, [type], [options])](#MarketData+getHistory) ⇒ <code>Promise</code>
  * [.getQuote(symbols, [fields], [mode])](#MarketData+getQuote)

<a name="MarketData+getHistory"></a>
### marketData.getHistory(symbol, [type], [options]) ⇒ <code>Promise</code>
The getHistory API is used to request historical time series data on stocks,
indices, mutual funds, ETFs, futures, indices or forex pairs. Historical data
is available as tick, minute or end-of-day data.

**Kind**: instance method of <code>[MarketData](#MarketData)</code>  
**See**: http://www.barchartondemand.com/api/getHistory  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>String</code> | [description] |
| [type] | <code>String</code> | [description] |
| [options] | <code>Object</code> | All additional options as key value |

<a name="MarketData+getQuote"></a>
### marketData.getQuote(symbols, [fields], [mode])
The getQuote API is used to request price data, either real-time, delayed or
end-of-day, by symbol. In addition to Last Price or Settlement, other fields
such as Open, High, Low, Close, Bid, Ask, 52-week high and low, and more are
available.

**Kind**: instance method of <code>[MarketData](#MarketData)</code>  
**See**: http://www.barchartondemand.com/api/getQuote  

| Param | Type | Description |
| --- | --- | --- |
| symbols | <code>String</code> | A symbol or code that identifies a financial instrument. Multiple symbols separated by a comma may be used. |
| [fields] | <code>String</code> | The fields requested. |
| [mode] | <code>String</code> | Parameter to change quote type to real-time ("R"), delayed ("I") or end-of-day ("D") |
