import styled, { css } from 'styled-components'
import commonStyles from './helpers/common-input-styles'
import colors from './helpers/colors'
import { focus } from './helpers/utils'

const Input = styled.input`
  ${commonStyles}
  ${typeStyles}
`

Input.displayName = 'Input'
export default Input

// helper fns

function typeStyles (props) {
  if (props.type === 'checkbox')
    return checkboxStyles()

  if(props.type === 'search')
    return searchStyles()
}

function checkboxStyles () {
  const checkboxSize = 15
  const checkSvg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${checkboxSize} ${checkboxSize}">`,
      `<path d="M3,6L6,11L10,2" fill="transparent" stroke-width="2" stroke="${colors.white}"/>`,
    `</svg>`,
  ].join('')

  return `
    appearance: none;
    border: 1px solid #aaa;
    cursor: pointer;
    height: ${checkboxSize}px;
    outline: none;
    width: ${checkboxSize}px;

    &:checked {
      background-color: ${colors.lightBlue};
      background-image: url('data:image/svg+xml;utf8,${checkSvg}');
      border-color: ${colors.lightBlue};
    }
  `
}

function searchStyles () {
  const searchSize = 30

  // this is a mess; basically it's a function to return
  // an xml/svg string of a magniying glass (function-ified
  // so that the stroke color can be changed)
  const searchSvg = stroke => {
    const strokeVal = stroke.replace(/#/g, '%23')
    const viewBox = `0 0 ${searchSize} ${searchSize}`

    const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">`,
      `<circle cx="18" cy="12" r="6" stroke-width="2" fill="transparent" stroke="${strokeVal}"/>`,
      `<path d="M13,16L5,23" stroke-width="3" fill="transparent" stroke="${strokeVal}"/>`,
    `</svg>`,
    ]

    return `url('data:image/svg+xml;utf8,${svg.join('')}');`
  }

  return css`
    background-image: ${searchSvg(colors.lightGrey)};
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
    padding-right: ${searchSize}px;

    ${focus`
      background-image: ${searchSvg(colors.lightBlue)};
    `}
  `
}


