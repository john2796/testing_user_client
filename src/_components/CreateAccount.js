import React from 'react'

const CreateAccount = ({ state, postHandler, onChangeHander }) => {
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={postHandler}>
        <br />
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={onChangeHander}
        />
        <label>firstName</label>
        <br />
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={onChangeHander}
        />
        <label>lastName</label>
        <br />
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

        <input
          type="text"
          name="email"
          value={state.email}
          onChange={onChangeHander}
        />
        <label>email</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateAccount
