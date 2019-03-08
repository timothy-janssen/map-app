import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { sanitizeUrl } from '@braintree/sanitize-url'

import './style.scss'

class IsTyping extends Component {
  componentDidMount () {
    const { callAfterTimeout, timeout } = this.props
    setTimeout(callAfterTimeout, timeout)
  }

  render () {
    const { image } = this.props

    if (image && sanitizeUrl(image) === 'about:blank') {
      return null
    }

    return (
      <div className='RecastAppMessage CaiAppMessage bot'>
        {image && <img className='RecastAppMessage--logo CaiAppMessage--logo visible' src={image} />}
        <img src='https://cdn.cai.tools.sap/webchat/istyping.gif' />
      </div>
    )
  }
}

IsTyping.propTypes = {
  image: PropTypes.string,
  callAfterTimeout: PropTypes.func,
  timeout: PropTypes.number,
}

export default IsTyping
