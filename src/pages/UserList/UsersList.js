import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import UserService from "../../services/userServices";
import '../../App.css';
import image from "../../images/background1.gif";



export default function UserList() {

  const [users, setUsers] = useState([]);

 


  useEffect(() => {
    let userService = new UserService();
    userService.getUsers().then((result) => {
    let response = result.data.data
    let lastResponse = response.filter((res )=> res.id != "60d0fe4f5311236168a109ca")
    setUsers(lastResponse)})
  },[]);
  
  return (
    <>
     
    <div className='users' style={{ 
     
        backgroundImage: `url(${image})`, 
        gridColumn:"250px",
        padding:"100px 0 60px 175px",
        display: "grid",
        gridTemplateColumns: "450px 450px ",
        gridGap: "15px",
         }}>





     
    
         <List style= {{ display:"grid", gridTemplateColumns:"370px 370px 370px", gridTemplateRows: "100px 100px 100px 100px 100px 100px 100px" , gap: "25px", 
        }}>
           {users.map((user => 
           

          <List.Item key={user.id} as={Link} to={`/user/${user.id}`}
        style={{ padding: '1em 2em',
       display: 'flex',
       alignItems: 'center',
       gap: '1em',
       background: '#DAECFF',
       borderRadius:"15px",
       
     }}
        >
            <Image src={user.picture} 
               style={{ width:" 80px", height: "80px",
       borderRadius: '50%',
     border: '3px solid #fff' 
    }}
     />
             <List.Content
              style={{fontSize: '1.3em',
     color: '#fff',
     background: 'rgba(255,255,255,.2)',
     width: '300px',
     padding: '.3em 1em',  }}
     >
              <List.Header style={{fontSize:"20px", color:"#2B5688"}}>{` ${user.firstName} ${user.lastName}`}</List.Header>
              <List.Description style={{fontSize:"15px", color:"#7A8CA1"}} >Click for detailed information</List.Description>
            </List.Content>
           </List.Item>
         
         ))}
        </List>
      

     
    </div>
     


    </>

 );
}
