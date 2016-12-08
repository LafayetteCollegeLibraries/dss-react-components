import React from 'react'
import ReactModal from 'react-modal'
import assign from 'object-assign'
import colors from '../helpers/colors'

import Header from './Header'

const PADDING = 20
const PADDING_UNIT = 'px'

const Modal = React.createClass({
  displayName: 'Modal',

  getChildContext: function () {
    return {
      color: this.props.color,
      padding: {
        value: PADDING,
        unit: PADDING_UNIT,
      }
    }
  },

  getModalContentStyles: function () {
    return assign({
        border: 'none',
        borderRadius: '2px',
        boxShadow: `0 0 2px 1px ${colors[this.props.color] || '#dedede'}`,
        padding: `${PADDING}${PADDING_UNIT}`,
      },
      this.getModalSize()
    )
  },

  getModalOverlayStyles: function () {
    return
  },

  getModalSize: function () {
    switch (this.props.size) {
      case 'compact':
        return {
          bottom: '60%',
          left: '5%',
          right: '5%',
          top: '10%',
        }

      case 'full':
        return {
          bottom: '2%',
          left: '2%',
          right: '2%',
          top: '2%',

          margin: '2%',
        }

      default:
        return {
          bottom: '12.5%',
          left: '12.5%',
          right: '12.5%',
          top: '12.5%',
        }
    }
  },


  render: function () {
    const props = assign({
      style: {
        content: this.getModalContentStyles(),
        overlay: this.getModalOverlayStyles(),
      }
    }, this.props)

    return React.createElement(ReactModal, props)
  }
})

Modal.childContextTypes = {
  color: React.PropTypes.string,
  padding: React.PropTypes.shape({
    value: React.PropTypes.number,
    unit: React.PropTypes.string,
  }),
}

Modal.Header = Header
export default Modal
