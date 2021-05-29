import React, { useState } from 'react'
import { Clamped, useClamped } from 'react-clamped'
import './App.css'

const App = () => {
  const date = new Date()

  const [state, setState] = useState({
    first: true,
    second: true
  })

  const ref = useClamped({
    clamp: 3,
    isClamped: state.second
  })

  return (
    <div className='App'>
      <aside>
        <header>
          <h1>
            React <br /> Clampe...
          </h1>
          <span>
            by Xenoverse <sup>{date.getFullYear()}</sup>
          </span>
        </header>
        <main>
          <p>
            React-Clamped is a lightweight clamping library which allows you to
            create multiline ellipsis texts in react apps. Its bundle size is
            only 724B. Since it is very lightweight, you can use it any project
            and it will have almost no impact ont bundle size of the app. For
            further information, visit npm page or github repository.
          </p>
          <code>
            <pre>
              {`import { Clamped } from "react-clamped";

const Card = () => (
    <div className="card">
      <Clamped>
        // ...your content...
      </Clamped>
    </div>
  )

export default Card;
                `}
            </pre>
          </code>
        </main>
      </aside>
      <section>
        <div className='clamped'>
          <header>
            <h2>Am I clamped?</h2>
            <span>Clamped Component</span>
          </header>
          <Clamped clamp={3} isClamped={state.first}>
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
          <button onClick={() => setState({ ...state, first: !state.first })}>
            {state.first ? 'Show More' : 'Show Less'}
          </button>
        </div>
        <div className='useClamped'>
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
          <button onClick={() => setState({ ...state, second: !state.second })}>
            {state.second ? 'Show More' : 'Show Less'}
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
