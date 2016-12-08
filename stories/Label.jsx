import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Label } from '../'
import types from './types'

storiesOf('Label', module)
  .add('all the types', () => (
    <div>
      {types.map((t, i) => {
        return (
          <div key={i}>
            <Label color={t}>color="{t}"</Label>
          </div>
        )
      })}
    </div>
  ))
