// styles that can be shared across inputs as well as TextAreas
import { css } from 'styled-components'
import colors from './colors'
import { disabled, focus } from './utils'

// TODO: style placeholder text:
// (related: https://github.com/styled-components/styled-components/issues/260)
// (related: https://github.com/rofrischmann/inline-style-prefixer/issues/104)

export default css`
  border-color: ${colors.lightGrey};
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  font-size: 1em;
  line-height: 1.5em;
  outline: none;
  padding: .25em;
  vertical-align: middle;
  width: 100%;

  ${focus`
    border-color: ${colors.lightBlue};
  `}

  ${disabled`
    background-color: ${colors.lightGrey};
  `}
`
