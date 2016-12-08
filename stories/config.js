import { configure } from '@kadira/storybook'
import { injectGlobal } from 'styled-components'

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

configure(() => {
  require('./Button.jsx')
  require('./Input.jsx')
  require('./Label.jsx')
  require('./Modal.jsx')
  require('./TextArea.jsx')
  require('./Toggle.jsx')
}, module)
