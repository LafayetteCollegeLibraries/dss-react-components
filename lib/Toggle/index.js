import React from 'react'
import assign from 'object-assign'
import Group from './Group'
import Option from './Option'

const T = React.PropTypes
const hasOwnProperty = Object.prototype.hasOwnProperty

const Toggle = React.createClass({
  propTypes: {
    onChange: T.func,
    value: T.any,
    values: T.array,
  },

  renderValues: function () {
    const vals = this.props.values

    return vals.map((val, index) => {
      const props = {}
      if (typeof val === 'object' && hasOwnProperty.call(val, 'value'))
        props.value = val.value
      else
        props.value = val

      if (typeof val === 'object' && hasOwnProperty.call(val, 'label'))
        props.label = val.label
      else
        props.label = props.value

      return React.createElement(Option, props)
    })
  },

  render: function () {
    const props = assign({}, this.props)
    delete props.values

    return React.createElement(Group, props, this.renderValues())
  }
})

export default Toggle
export { Group, Option }
