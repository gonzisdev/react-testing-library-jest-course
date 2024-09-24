import React, { useState } from "react"

export const UserForm = ({onUserAdd}) => {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onUserAdd({name, email})
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"  value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <button type="submit">Add User</button>
    </form>
  )
}
