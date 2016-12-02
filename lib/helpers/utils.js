import { css } from 'styled-components'

export function disabled () {
  return css`
    &[disabled] {
      ${css.apply(null, arguments)}
    }
  `
}

export function focus () {
  return css`
    &:focus {
      ${css.apply(null, arguments)}
    }
  `
}

export function hover () {
  return css`
    &:hover, &:focus {
      ${css.apply(null, arguments)}
    }
  `
}
