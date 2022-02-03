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
    userService.getUsers().then((result) => setUsers(result.data.data));
  },[]);


  
  return (
    <>
     
    <div className='users' style={{ 
     
        backgroundImage: `url(${image})`, 
        gridColumn:"250px",
        padding:"100px 0 60px 250px",
        display: "grid",
        gridTemplateColumns: "450px 450px ",
        gridGap: "15px",
         }}>
    
    {users.map((user) => (
        <List key={user.id} selection verticalAlign="middle" >
          <List.Item as={Link} to={`/user/${user.id}`} style={{ padding: '1em 2em',
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
        background: '#DAECFF', }}>
            <Image src={user.picture}  style={{ width: '75px',
      borderRadius: '50%',
      border: '3px solid #fff', }}/>
            <List.Content style={{fontSize: '1.3em',
    color: '#fff',
    background: 'rgba(255,255,255,.2)',
    width: '300px',
    padding: '.3em 1em',  }}>
              <List.Header>{`${user.title}. ${user.firstName} ${user.lastName}`}</List.Header>
              <List.Description>{user.id}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      ))}
<br/>
     
    </div>
     


    </>
  );
}


