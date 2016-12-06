import React from 'react'
import styled from 'styled-components'
import { storiesOf, action } from '@kadira/storybook'
import { Toggle } from '../'

const Example = styled.div`margin-bottom:1em;`
const values = {
  str: ['first value', 'second value', 'third value'],
  obj: [
    { label: '👍', value: 'yes' },
    { label: '¯\\_(ツ)_/¯', value: 'eh'},
    { label: '👎', value: 'no' },
  ]
}

storiesOf('Toggle', module)
  .add('default export, vals as strings', () => (
    <div>
      <Toggle
        onChange={action('change')}
        value="second value"
        values={values.str}
        />
    </div>
  ))
  .add('default export, vals as objects', () => (
    <div>
      <Toggle
        onChange={action('change')}
        value="eh"
        values={values.obj}
      />
    </div>
  ))
  .add('built out from Group + Option', () => (
    <Toggle.Group name="toggle-name" onChange={action('change!')} value="third value">
      <Toggle.Option key="opt-1" label="1st" value="first value" />
      <Toggle.Option key="opt-2" label="2nd" value="second value" />
      <Toggle.Option key="opt-3" label="3rd" value="third value" />
    </Toggle.Group>
  ))

