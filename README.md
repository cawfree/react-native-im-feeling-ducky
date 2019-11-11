# react-native-im-feeling-ducky
A React Native &lt;WebView /> which will navigate to the top result of your input string using [DuckDuckGo](https://duckduckgo.com/)!

## 🚀 Getting Started

Using [`npm`]():

```bash
npm install --save react-native-im-feeling-ducky
```

Using [`yarn`]():

```bash
yarn add react-native-im-feeling-ducky
```

## ✍️ Example

The `<FeelingDucky />` component is just a wrapper around a [`WebView`](https://facebook.github.io/react-native/docs/webview.html), whose component definition must be supplied by the caller. This is to ensure backwards compatibility with versions of React Native which depend upon the [deprecated `ReactNative.WebView` component](https://github.com/react-native-community/discussions-and-proposals/issues/6):

```javascript
import React from 'react';
import WebView from 'react-native-webview';
import FeelingDucky from 'react-native-im-feeling-ducky';

export default () => (
  <FeelingDucky
    WebView={WebView}
    style={{
      flex: 1,
    }}
    searchTerm="cawfree mapsy"
  />
);
```

This will display [the top result](http://www.cawfree.com/mapsy/) of the `searchTerm` when searched on Duck Duck Go.

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)
