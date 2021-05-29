# React Clamped

> A React Library to handle multiline ellipsises and to clamp the text to a fixed line number.

React-Clamped is a lightweight clamping library which allows you to create multiline ellipsis texts in react apps. Its bundle size is only 724B. Since it is very lightweight, you can use it any project and it will have almost no impact ont bundle size of the app.

[![NPM](https://img.shields.io/npm/v/react-clamped.svg)](https://www.npmjs.com/package/react-clamped) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-clamped
```

## Usage

### Basic Usage

Just import the Clamped component and wrap your content inside. The line number can be adjusted with clamp prop. The default for clamp prop is 1.

```tsx
import React, { Component } from 'react'

import { Clamped } from 'react-clamped'

class Card extends Component {
  render() {
    return (
      <div>
        <Clamped clamp={4}>{...your multiline content...}</Clamped>
      </div>
    )
  }
}
```

## License

MIT © [XenoverseUp](https://github.com/XenoverseUp)
