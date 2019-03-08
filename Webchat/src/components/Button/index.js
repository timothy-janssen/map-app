import React from 'react'
import PropTypes from 'prop-types'
import { sanitizeUrl } from '@braintree/sanitize-url'

import { truncate } from 'helpers'

import './style.scss'

const Button = ({ button, sendMessage }) => {
  const { value, title } = button
  const formattedTitle = truncate(title, 20)

  if (button.type === 'web_url' && sanitizeUrl(value) === 'about:blank') {
    return null
  }

  let content = null

  switch (button.type) {
  case 'web_url':
    content = (
      <a
        className='RecastAppButton-Link CaiAppButton-Link' href={value} target='_blank'
        rel='noopener noreferrer'>
        {formattedTitle}
      </a>
    )
    break
  default:
    content = (
      <div
        className='RecastAppButton CaiAppButton'
        onClick={() => sendMessage({ type: 'button', content: button }, title)}
      >
        {formattedTitle}
      </div>
    )
    break
  }

  return content
}

Button.propTypes = {
  button: PropTypes.object,
  sendMessage: PropTypes.func,
}

export default Button
