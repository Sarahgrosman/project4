
import axios from 'axios'
import { useEffect, useState } from "react"
import Search from './Search/Search'
import Button from './Button/Button'
import Card from './Card/Card'
import Select from './Select/Select'

function App() {
  const [gitUser,setGitUser]=useState("")
  const[searchedUser,setSearchedUser]=useState("")
  const [users,setUsers]=useState([])
  console.log(users);
  const [resetUser,setResetUser]=useState("")
  useEffect(() => {
   try   {
     async function fetchData(){
        const gitHubApiUrl=`https://api.github.com/users/${searchedUser}`
        if (gitUser==="") return;
        const {data} = await axios.get(gitHubApiUrl)
       
        const {avatar_url,created_at,login,public_repos} = data;
        console.log({avatar_url,created_at,login,public_repos});
        setUsers([...users,{ avatar_url, created_at, login, public_repos }])
        console.log(users);
     }
    
      fetchData();
    }
      catch(e){
        console.log(e)
      }
     }, [searchedUser])

 /* useEffect(()=>{

  }),[]*/
     
  
  return (
    <div className="App">
     <Search gitUser={gitUser} setGitUser={setGitUser}/>
     <Button
      text={"Search"}
       clickEvent={() => {
         console.log("search")
        setSearchedUser(gitUser)
        
       }}
       
       />
     <Button text={"Reset"} clickEvent={() => {
      console.log("Reset")
      setUsers([])
      setGitUser('')
      }}
      />

     {users.map((user,i) => 
      <Card key={i} users={user}  resetUser={(e) => {
        console.log("reset");
       console.log(e.target.parentElement.id);
      const newUsers = users.filter(user=>{
        return  user.login!= e.target.parentElement.id

       })
       console.log(newUsers);
       setUsers(newUsers)
       setGitUser("")
      }}
      />
     )}
     <Select/>
    </div>
  );
}

export default App;
/*import React, { useState, useEffect } from "react";

const GetUsersFromGithub = () => {
  const [users, setUsers] = useState([]);

  async function fetchMyAPI() {
    let response = await fetch("https://api.github.com/users");
    let users = await response.json();
    setUsers(users); // set users in state
  }

  useEffect(() => {
    fetchMyAPI();
  }, []); // empty array because we only run once

  return (
    <div>
      {users.map(user => {
        return (
          <div className="container">
            <img src={user.avatar_url} alt="user avatar" />
            <div>id: {user.id}</div>
            <div>Login name: {user.login}</div>
            <div>Github url: {user.url}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GetUsersFromGithub;*/
