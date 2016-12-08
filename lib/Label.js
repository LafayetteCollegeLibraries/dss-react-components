import styled from 'styled-components'
import styles from './helpers/styles'
import colors from './helpers/colors'

const getLabelColor = props => {
  const which = colors[props.color || 'default']

  if (!which)
    return `background-color: ${colors.grey};`

  return `background-color: ${which};`
}

const Label = styled.span`
  border-radius: .5em;
  color: #ffffff;
  display: inline-block;
  font-size: .75em;
  margin: .1em;
  padding: .25em .5em;

  ${getLabelColor}
`

Label.displayName = 'Label'
export default Label
