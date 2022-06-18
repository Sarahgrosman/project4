
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
  
  useEffect(() => {
   try   {
     async function fetchData(){
        const gitHubApiUrl=`https://api.github.com/users/${searchedUser}`
        if (gitUser==="") return;
        const {data} = await axios.get(gitHubApiUrl)
       console.log(data);
        const {avatar_url,created_at,login,public_repos,id} = data;
        
        setUsers([...users,{ avatar_url, created_at, login, public_repos,id }])
        
     }
    
      fetchData();
    }
      catch(e){
        console.log(e)
      }
     }, [searchedUser])

     useEffect(() => {
      console.log("users:", users);
    }, [users]);

 
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

<Select  sort={ (e) =>{
      
      if (e.target.value==="name") {
        console.log(e.target.value);
        setUsers(users.sort((a,b)=>
           a.login.toUpperCase()<b.login.toUpperCase()? -1
         : a.login.toUpperCase()>b.login.toUpperCase()? 1 : 0 ))
         console.log(users);
      }
     
        if(e.target.value==="repositories") {
          console.log(e.target.value);
        
        setUsers(users.sort((a,b)=>a.public_repos-b.public_repos))
        console.log(users);
        }
        if(e.target.value==="date") {
          console.log(e.target.value);
         
          setUsers(users.sort((a,b)=>
           new Date(a.created_at.split("T")[0]).getTime() - new Date(b.created_at.split("T")[0]).getTime()))
           console.log(users);
        }
 
      
     }}/>

     {users.map(user => 
      <Card key={user.id} users={user}  resetUser={(e) => {
        console.log("reset");
       console.log(e.target.parentElement.id);
      const newUsers = users.filter((user)=>{
        return  user.login!== e.target.parentElement.id


       })
      
       console.log(newUsers);
       setUsers(newUsers)
       setGitUser("")
      }}
      />
     )}
     
    
       
    
    </div>
  )};


export default App;

