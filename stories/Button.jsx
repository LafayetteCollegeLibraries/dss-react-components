import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Button } from '../'
import types from './types'

storiesOf('Button', module)
  .add('all the types, size="default"', () => (
    <div>
      {types.map((t, i) => (
        <div key={i}>
          <Button type={t}>type="{t}"</Button>
        </div>
      ))}

      <div key={types.length}>
        <Button type="text">type="text"</Button>
      </div>
    </div>
  ))
  .add('all the sizes, type="info"', () => (
    <div>
      <div key={1}>
        <Button size="small" type="info">{'size="small"'}</Button>
      </div>

      <div key={2}>
        <Button size="default" type="info">{'size="default"'}</Button>
      </div>

      <div key={3}>
        <Button size="large" type="info">{'size="large"'}</Button>
      </div>
    </div>
  ))
