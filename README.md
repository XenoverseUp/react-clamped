# react-clamped

> A React Library to handle multiline ellipsises and to clamp the text to a fixed line number.

[![NPM](https://img.shields.io/npm/v/react-clamped.svg)](https://www.npmjs.com/package/react-clamped) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-clamped
```

## Usage

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
