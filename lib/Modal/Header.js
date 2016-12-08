import React from 'react'
import assign from 'object-assign'
import styled, { css } from 'styled-components'
import styles from '../helpers/styles'

const T = React.PropTypes

const BaseHeader = styled.header`
  font-size: 1.15em;

  ${props => {
    const { unit, value } = props.padding
    const halfVal = value / 2

    return css`
      margin: -${value}${unit};
      margin-bottom: ${halfVal}${unit};
      padding: ${halfVal}${unit};
      text-align: ${props.align};

      ${styles[props.color]}
    `
  }}

`

const Header = React.createClass({
  propTypes: {
    align: T.oneOf(['left', 'center', 'right']),
  },

  getDefaultProps: function () {
    return {
      align: 'left'
    }
  },

  render: function () {
    const props = assign({
      color: this.context.color,
      padding: this.context.padding,
    }, this.props)

    return React.createElement(BaseHeader, props, this.props.children)
  }
})

Header.contextTypes = {
  color: T.string,
  padding: T.shape({
    value: T.number,
    unit: T.string,
  }),
}

export default Header
