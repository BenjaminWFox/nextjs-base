import PropTypes from 'prop-types'

export default function Callout({ children }) {
  return <p><strong style={{ color: 'red' }}>!</strong> {children} <strong style={{ color: 'red' }}>!</strong></p>
}

Callout.propTypes = {
  children: PropTypes.node.isRequired
}
