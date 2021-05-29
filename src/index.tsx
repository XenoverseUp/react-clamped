import * as React from 'react'

interface ClampedProps {
  children: string
  clamp?: number
  element?:
    | 'a'
    | 'abbr'
    | 'address'
    | 'article'
    | 'aside'
    | 'b'
    | 'blockquote'
    | 'button'
    | 'cite'
    | 'code'
    | 'div'
    | 'figcaption'
    | 'footer'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'header'
    | 'li'
    | 'main'
    | 'nav'
    | 'p'
    | 'pre'
    | 'q'
    | 'span'
    | 'strong'
    | 'summary'

  className?: string
  isClamped?: boolean
}

type Ref = HTMLButtonElement

export const Clamped = React.forwardRef<Ref, ClampedProps>(
  (
    {
      children,
      clamp = 1,
      isClamped = true,
      element = ClampedElements.p,
      className,
      ...rest
    },
    ref
  ) => {
    const style = {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: clamp
    }
    return React.createElement(
      element,
      { style: isClamped ? style : null, ref, className, ...rest },
      children
    )
  }
)

export const ClampedElements = {
  a: 'a',
  abbr: 'abbr',
  address: 'address',
  article: 'article',
  aside: 'aside',
  b: 'b',
  blockquote: 'blockquote',
  button: 'button',
  cite: 'cite',
  code: 'code',
  div: 'div',
  figcaption: 'figcaption',
  footer: 'footer',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  header: 'header',
  li: 'li',
  main: 'main',
  nav: 'nav',
  p: 'p',
  pre: 'pre',
  q: 'q',
  span: 'span',
  strong: 'strong',
  summary: 'summary'
}

interface UseClampedProps {
  clamp?: number
  isClamped?: boolean
}

export const useClamped = ({
  clamp = 1,
  isClamped = true
}: UseClampedProps) => {
  const element = React.useRef<any>(null)

  React.useEffect(() => {
    const { current } = element

    if (current) {
      if (isClamped) {
        current.style.display = '-webkit-box'
        current.style.overflow = 'hidden'
        current.style.webkitBoxOrient = 'vertical'
        current.style.webkitLineClamp = clamp
      } else {
        current.style.display = null
        current.style.overflow = null
        current.style.webkitBoxOrient = null
        current.style.webkitLineClamp = null
      }
    } else console.error('The element ref is null. Please assign the ref')
  }, [isClamped, element])

  return element
}
