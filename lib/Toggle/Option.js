import React from 'react'
import styled from 'styled-components'

const T = React.PropTypes

const Radio = styled.input`
  display: none;
`

const bg = {
  default: '#efefef',
  selected: '#b0b0b0',
  hover: '#dedede',
}

const Label = styled.label`
  background-color: ${props => bg[props.selected ? 'selected' : 'default']};
  border: none;
  cursor: ${props => props.selected ? 'auto' : 'pointer'};
  display: inline-block;
  font-weight: normal;
  line-height: 1.25em;
  min-width: 5em;
  padding: 5px;
  text-align: center;

  &:hover, &:target {
    background-color: ${props => bg[props.selected ? 'selected' : 'hover']};
  }
`

const Option = React.createClass({
  propTypes: {
    label: T.oneOfType([T.string, T.number]),
    onClick: T.func,
    selected: T.bool,
    value: T.any,
  },

  render: function () {
    const { onClick, selected, style, value } = this.props

    return (
      // <Label>
      React.createElement(Label, {onClick, selected, style}, [
        // {label}
        this.props.label,

        // <Radio/>
        React.createElement(Radio, {
          key: 'toggle-opt',
          type: 'radio',
          selected,
          value,
        })
      ])
      // </Label>
    )
  }
})

export default Option
