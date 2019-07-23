import React from 'react'

export default function Form({handleChange, name, surname, age}) {
  return(
    <div>
      Name:
      <input onChange={handleChange} type="text" name="name"/>
      <p>{name}</p>
      Surname:
      <input onChange={handleChange} type="text" name="surname"/>
      <p>{surname}</p>
      Age:
      <input onChange={handleChange} type="text" name="age"/>
      <p>{age}</p>
    </div>
  )
}

