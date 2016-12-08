import styled from 'styled-components'
import styles from './helpers/styles'
import colors from './helpers/colors'
import { hover } from './helpers/utils'

const FONT_SIZE = {
  default: '14px',
  large: '16px',
  small: '12px',
}

const PADDING = {
  default: '4px 6px',
  large: '8px',
  small: '2px 4px'
}

const defaultTheme = `
  background-color: #efefef;
  border-color: #bcbcbc;
  color: #1e1e1e;
`

const getFontSize = props => {
  if (!props.size)
    FONT_SIZE.default

  return FONT_SIZE[props.size] || FONT_SIZE.default
}

const getPadding = props => {
  if (!props.size)
    return PADDING.default

  return PADDING[props.size] || PADDING.default
}

const getLinkStyles = props => {
  let { color } = props
  let linkColor

  if (color === 'default')
    color = 'info'

  if (color && colors[color])
    linkColor = colors[color]
  else
    linkColor = colors.info

  return `
    background-color: transparent;
    border: none;
    color: ${linkColor};
  `
}

const getThemeStyles = props => {
  if (props.link)
    return getLinkStyles(props)

  const { color } = props

  let theme

  if (!color || color === 'default' || (theme = styles[color]) === undefined)
    return defaultTheme

  return theme
}

const getHoverValues = props => {
  if (props.link)
    return

  let { color } = props

  if (!color || color === 'default')
    return hover`background-color: #bcbcbc;`

  if (color === 'link')
    return hover`color: ${colors.info20};`

  const bgColor = colors[color + '20']

  if (bgColor)
    return hover`background-color: ${bgColor};`
}

const Button = styled.button`
  appearance: none;
  box-shadow: none;
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  font-size: ${getFontSize};
  font-weight: normal;
  line-height: 1.5em;
  margin: 2px;
  outline: none;
  padding: ${getPadding};

  ${getThemeStyles}
  ${getHoverValues}
`

Button.displayName = 'Button'
export default Button
