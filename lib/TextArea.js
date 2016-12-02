import React from 'react'
import styled, { css } from 'styled-components'
import assign from 'object-assign'
import commonStyles from './helpers/common-input-styles'

const BaseTextArea = styled.textarea`
  ${commonStyles}
  ${props => `resize: ${props.expand ? 'none' : 'vertical'};`}
`

const TextArea = React.createClass({

  // expando/collapso
  // via: http://www.perplexed.co.uk/596_expanding_textarea_as_you_type.htm
  handleChange: function (ev) {
    const txt = this.textarea

    if (!txt)
      return


    while (txt.rows > 1 && txt.scrollHeight < txt.offsetHeight) {
      txt.rows--
    }

    let h = 0
    let changed = false

    while (txt.scrollHeight > txt.offsetHeight && h !== txt.offsetHeight) {
      h = txt.offsetHeight
      txt.rows++
    }

    txt.rows++

    this.props.onChange && this.props.onChange(ev)
  },

  render: function () {
    let props = assign({
      rows: 2,
    }, this.props)

    if (props.expand) {
      props = assign(props, {
        innerRef: comp => { this.textarea = comp },
        onChange: this.handleChange,
      })
    }

    return React.createElement(BaseTextArea, props)
  }
})


export default TextArea
