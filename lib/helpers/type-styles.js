import assign from 'object-assign'
import colors from './colors'

export const typeColors = assign({}, colors, {
  danger: colors.lightRed,
  danger20: '#2b000c',

  info: colors.lightBlue,
  info20: '#2074a5',

  success: '#57a458',
  success20: '#346134',

  warning: '#e7ad5c',
  warning20: '#c17c1c',
})

export const typeStyles = {
  danger: `
    background-color: ${typeColors.danger};
    border-color: ${typeColors.danger20};
    color: ${typeColors.white};
  `,

  info: `
    background-color: ${typeColors.info};
    border-color: ${typeColors.info20};
    color: ${typeColors.white};
  `,

  success: `
    background-color: ${typeColors.success};
    border-color: ${typeColors.success20};
    color: ${typeColors.white};
  `,

  // really just used for buttons, but it's a type, so we'll store it here
  text: `
    background-color: transparent;
    border: none;
    color: ${typeColors.info};
  `,

  warning: `
    background-color: ${typeColors.warning};
    border-color: ${typeColors.warning20};
    color: ${typeColors.white};
  `,
}

export default function getTypeStyles (which) {
  return typeStyles[which]
}
