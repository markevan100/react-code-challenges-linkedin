import { useState } from 'react'

export default function FormValidator () {
  const emptyString = ''
  const [color, setColor] = useState('red')
  const [userMessage, setUserMessage] = useState(emptyString)
  const [email, setEmail] = useState(emptyString)
  const [password, setPassword] = useState(emptyString)
  const [passwordConfirm, setPasswordConfirm] = useState(emptyString)

  const handleSubmit = event => {
    event.preventDefault()
    let submitText = emptyString
    setColor('red')
    if (email === emptyString || (email.match(/@/g) || []).length !== 1) {
      submitText += 'Email must be present. Email must contain one @. '
    }
    if (password === emptyString) {
      submitText += 'Password must be present. '
    }
    if (passwordConfirm === emptyString || passwordConfirm !== password) {
      submitText += 'Password confirmation must be present and must match the password.'
    }
    if (submitText === emptyString) {
      submitText = 'User has been created.'
      setColor('green')
    }
    setUserMessage(submitText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <span style={{color: color}}>{userMessage}</span>
      <input type='submit' value='Submit'/>
    </form>
  )
}
