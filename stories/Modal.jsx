import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Modal, { Header } from '../lib/Modal'
import Button from '../lib/Button'

storiesOf('Modal', module)
  .add('default Modal', () => (
    <div>
      <Modal isOpen color="warning">
        <Header>Hey I am a Header</Header>
        <h1>HEY I AM A MODAL AMA</h1>
      </Modal>
    </div>
  ))
