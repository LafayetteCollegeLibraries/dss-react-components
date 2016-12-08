import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Button } from '../'
import types from './types'

storiesOf('Button', module)
  .add('all the types, size="default"', () => (
    <div>
      {types.map((t, i) => (
        <div key={i}>
          <Button color={t}>color="{t}"</Button>
        </div>
      ))}
    </div>
  ))
  .add('all the types, link={true}', () => (
    <div>
      {types.map((t, i) => (
        <div key={i}>
          <Button color={t} link>&lt;Button color="{t}" link /&gt;</Button>
        </div>
      ))}
    </div>
  ))
  .add('all the sizes, type="info"', () => (
    <div>
      <div key={1}>
        <Button size="small" color="info">{'size="small"'}</Button>
      </div>

      <div key={2}>
        <Button size="default" color="info">{'size="default"'}</Button>
      </div>

      <div key={3}>
        <Button size="large" color="info">{'size="large"'}</Button>
      </div>
    </div>
  ))
