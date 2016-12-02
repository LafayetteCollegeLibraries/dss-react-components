import styled from 'styled-components'
import getTypeStyles, {typeColors} from './helpers/type-styles'
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

const getThemeStyles = props => {
  if (!props.type || props.type === 'default')
    return defaultTheme

  return getTypeStyles(props.type)
}

const getHoverValues = props => {
  let { type } = props

  if (!type || type === 'default')
    return hover`background-color: #bcbcbc;`

  if (type === 'text')
    return hover`color: ${typeColors.info20};`

  const bgColor = typeColors[type + '20']

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
