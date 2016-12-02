import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TextArea from '../lib/TextArea'

storiesOf('TextArea', module)
  .add('base component (no expand)', () => (
    <TextArea />
  ))
  .add('base component (w/ expand)', () => (
    <TextArea expand />
  ))
