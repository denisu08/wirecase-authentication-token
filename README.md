# wirecase-authentication-token

> Wirecase Authentication Token Component.

[![NPM](https://img.shields.io/npm/v/wirecase-authentication-token.svg)](https://www.npmjs.com/package/wirecase-authentication-token) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/wirecase-authentication-token.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wirecase-authentication-token
[download-image]: https://img.shields.io/npm/dm/wirecase-authentication-token.svg?style=flat-square
[download-url]: https://npmjs.org/package/wirecase-authentication-token

## Install

```bash
npm install --save wirecase-authentication-token
```

[![wirecase-authentication-token](https://nodei.co/npm/wirecase-authentication-token.png?downloads=true)](https://npmjs.org/package/wirecase-authentication-token)

## Usage

```jsx
import React, { Component } from 'react';

import AuthenticationTokenComponent from 'wirecase-authentication-token';

class Example extends Component {
  render() {
    return (
      <AuthenticationTokenComponent
        json={[
          {
            task: 'Learn React',
            done: true,
          },
          {
            task: 'Write Book',
            done: false,
          },
        ]}
      />
    );
  }
}
```

# Demo

[http://denisu08.github.io/wirecase-authentication-token](http://denisu08.github.io/wirecase-authentication-token/)

# JSFiddle Example

[http://jsfiddle.net/denisu08/61fwqcg5/](http://jsfiddle.net/denisu08/61fwqcg5/)

# What

![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-authentication-token/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-authentication-token/master/pic2.png)

## License

MIT © [denisu08](https://github.com/denisu08)
