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

Just import the Clamped component and wrap your content inside. The line number can be adjusted with clamp prop. The default for clamp prop is "1".

```tsx
import React, { Component } from 'react'

import { Clamped } from 'react-clamped'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Clamped clamp={4}>{...your multiline content...}</Clamped>
      </div>
    )
  }
}
```

### useClamped Hook

You can truncate the lines to a fixed number with useClamped hook, as well. Import the hook and initialize. Then assign the ref to the element you want to truncate.


```tsx
import React, { Component } from 'react'

import { useClamped } from 'react-clamped'

const Card = () => {
  const ref = useClamped({
    clamp: 3,
    isClamped: true
  })
  
  return (
      <div className="card">
        <p ref={ref}>{...your multiline content...}</p>
      </div>
    )
}
```

### Props

- clamp : Number
    This prop determines how many lines should be rendered. The "**clamp**" can be used in both "Clamped" component as a prop and in "useClamped" hook as an object entry. Default value is **1**.
- element : String
    The "**element**" prop can be used in only "Clamped" component as a prop and it determines which DOM element should be used to wrap content. Default value is **"p"**.
- isClamped : Boolean
    This prop determines if the text should be truncated. The "**isClamped**" can be used in both "Clamped" component as a prop and in "useClamped" hook as an object entry. This prop can be very handy if you want to make a "show more" button. The default value if **true**.

## License

MIT © [XenoverseUp](https://github.com/XenoverseUp)
