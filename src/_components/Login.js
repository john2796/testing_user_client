import React from 'react'

const Login = ({ state, onChangeHander, loginHanlder }) => {
  return (
    <div>
      <h1>LOGIN PAGE!</h1>
      <form
        onSubmit={loginHanlder}
      >
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={onChangeHander}
        />
        <label>username</label>
        <br />
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={onChangeHander}
        />
        <label>password</label>
        <br />
        <button
          type="submit"
        >submit</button>
      </form>
    </div>
  )
}

export default Login
