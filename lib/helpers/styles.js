import { css } from 'styled-components'
import colors from './colors'

export const danger = css`
  background-color: ${colors.danger};
  border-color: ${colors.danger20};
  color: ${colors.white};
`
export const info = css`
  background-color: ${colors.info};
  border-color: ${colors.info20};
  color: ${colors.white};
`

export const success = css`
  background-color: ${colors.success};
  border-color: ${colors.success20};
  color: ${colors.white};
`

export const warning = css`
  background-color: ${colors.warning};
  border-color: ${colors.warning20};
  color: ${colors.white};
`

export default {
  danger,
  info,
  success,
  warning,
}
