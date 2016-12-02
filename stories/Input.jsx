import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Input from '../lib/Input'


storiesOf('Input', module)
  .add('plain text', () => (
    <Input placeholder="just some placeholdin' text" />
  ))
  .add('search input', () => (
    <Input type="search" />
  ))
  .add('checkbox input', () => (
    <div>
      <label>
        <Input type="checkbox" />
        unchecked
      </label>

      <label>
        <Input type="checkbox" checked />
        checked
      </label>
    </div>
  ))
