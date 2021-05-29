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

*   **clamp : Number**

    This prop determines how many lines should be rendered. The "**clamp**" can be used in both "Clamped" component as a prop and in "useClamped" hook as an object entry. Default value is **1**.
    
*   **element : String**

    The "**element**" prop can be used in only "Clamped" component as a prop and it determines which DOM element should be used to wrap content. Default value is **"p"**.

*   **isClamped : Boolean**

    This prop determines if the text should be truncated. The "**isClamped**" can be used in both "Clamped" component as a prop and in "useClamped" hook as an object entry. This prop can be very handy if you want to make a "show more" button. The default value if **true**.

## Example

Here is an example of making collapsible text with React Clamped.

```tsx
import React, { useState } from 'react'
import { Clamped, useClamped } from 'react-clamped'
import './App.css'

const App = () => {
  const [state, setState] = useState({
    component: true,
    hook: true
  })

  const ref = useClamped({
    clamp: 3,
    isClamped: state.hook
  })

  return (
    <div className='App'>
      <section>
        <div className='clamped-component'>
          <header>
            <h2>Am I clamped?</h2>
            <span>Clamped Component</span>
          </header>
          <Clamped clamp={3} isClamped={state.component} element="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
            temporibus voluptas porro earum sequi ipsum aut aliquam accusamus id
            saepe necessitatibus impedit nesciunt accusantium dolor culpa,
            corporis suscipit nisi molestias. Neque ipsa officia quis explicabo
            asperiores itaque porro facilis perspiciatis? Eaque, eos? Fuga
            facilis voluptate, molestiae maiores pariatur culpa excepturi nulla
            doloribus laboriosam minus mollitia porro dicta, cumque repellat
            illo, cum tempore itaque possimus repellendus corporis? Illo, quod
            consequuntur?
          </Clamped>
          <button onClick={() => setState({ ...state, component: !state.component })}>
            {state.first ? 'Show More' : 'Show Less'}
          </button>
        </div>
        <div className='use-clamped'>
          <header>
            <h2>Did you use clamp?</h2>
            <span>useClamped Hook</span>
          </header>
          <p ref={ref}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos
            temporibus voluptas porro earum sequi ipsum aut aliquam accusamus id
            saepe necessitatibus impedit nesciunt accusantium dolor culpa,
            corporis suscipit nisi molestias. Neque ipsa officia quis explicabo
            asperiores itaque porro facilis perspiciatis? Eaque, eos? Fuga
            facilis voluptate, molestiae maiores pariatur culpa excepturi nulla
            doloribus laboriosam minus mollitia porro dicta, cumque repellat
            illo, cum tempore itaque possimus repellendus corporis? Illo, quod
            consequuntur?
          </p>
          <button onClick={() => setState({ ...state, hook: !state.hook })}>
            {state.second ? 'Show More' : 'Show Less'}
          </button>
        </div>
      </section>
    </div>
  )
}

export default App

```

## License

MIT © [XenoverseUp](https://github.com/XenoverseUp)
