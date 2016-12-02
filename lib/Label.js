import styled from 'styled-components'
import { typeColors } from './helpers/type-styles'

const getLabelColor = props => {
  const type = props.type || 'default'
  const color = typeColors[type]

  if (!color)
    return `background-color: ${typeColors.grey};`

  return `background-color: ${typeColors[type]};`
}

const Label = styled.span`
  border-radius: .5em;
  display: inline-block;
  font-size: .75em;
  margin: .1em;
  padding: .25em .5em;

  color: #ffffff;

  ${getLabelColor}
`

Label.displayName = 'Label'

export default Label
