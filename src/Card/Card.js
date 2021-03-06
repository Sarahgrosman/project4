import React from 'react'

const Card = ({users , resetUser }) => {
  return (
    <div id={users.login}>
      <h1>{users.login}</h1>
    <div><img src={users.avatar_url}  alt={users.login} /></div>   
    <h3>created_at:{users.created_at.split("T"[0])}</h3>
    <h3>repositories:{users.public_repos}</h3> 
    <button onClick={resetUser}>deleteUser</button>
    </div>
  )
}

export default Card