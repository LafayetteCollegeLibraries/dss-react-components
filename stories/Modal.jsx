import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Modal } from '../'
import Button from '../lib/Button'

storiesOf('Modal', module)
  .add('default Modal', () => (
    <div>
      <Modal isOpen color="warning">
        <Modal.Header>Hey I am a Header</Modal.Header>
        <h1>HEY I AM A MODAL AMA</h1>
      </Modal>
    </div>
  ))
