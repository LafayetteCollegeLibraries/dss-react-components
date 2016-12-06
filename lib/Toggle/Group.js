import React from 'react'
import styled from 'styled-components'
import assign from 'object-assign'

const T = React.PropTypes

const InputGroupContainer = styled.div`
  border-color: #b0b0b0;
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  display: inline-block;
  font-size: .9em;
`

const InputGroup = React.createClass({
  propTypes: {
    name: T.string,
    onChange: T.func,
    value: T.any,
  },

  getLabelFromProps: function (props) {
    const label = props.label

    if (label)
      return label

    const val = props.value

    if (typeof val === 'object' && val.hasOwnProperty('label'))
      return val.label

    return val
  },

  getValueFromProps: function (props) {
    const val = props.value

    if (typeof val === 'object' && val.hasOwnProperty('value'))
      return val.value

    return val
  },

  handleOptionClick: function (value, index, selected, originalClick, ev) {
    // prevent onChange from being triggered twice
    ev.preventDefault && ev.preventDefault()

    // don't call onChange if already selected
    if (selected)
      return false

    this.props.onChange && this.props.onChange(value, index, ev)

    // call the child onClick if it exists
    originalClick && originalClick(ev)
  },

  mapChildren: function () {
    return React.Children.map(this.props.children, (child, index) => {
      const label = this.getLabelFromProps(child.props)
      const value = this.getValueFromProps(child.props)
      const onClick = child.props.onClick

      let selected = false

      if (this.props.value && this.props.value === value)
        selected = true

      const props = {
        key: `group-opt-${index}`,
        onClick: this.handleOptionClick.bind(null, value, index, selected, onClick),
        label,
        value,
      }

      if (selected)
        props.selected = true

      // TODO: can't seem to apply `styled` to the children in this loop?
      if (index === 0) {
        props.style = assign({
          borderBottomLeftRadius: '1px',
          borderTopLeftRadius: '1px',
        }, props.style)
      }

      if (index === React.Children.count(this.props.children) - 1) {
        props.style = assign({
          borderBottomRightRadius: '1px',
          borderTopRightRadius: '1px',
        }, props.style)
      }

      return React.cloneElement(child, props)
    })
  },

  render: function () {
    return React.createElement(InputGroupContainer, {}, this.mapChildren())
  }
})

InputGroup.displayName = 'Group'
export default InputGroup
