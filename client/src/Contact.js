import React from 'react'

const Contact = ({ id, firstName, lastName }) => (
  <li key={id}>{firstName} {lastName}</li>
)

export default Contact