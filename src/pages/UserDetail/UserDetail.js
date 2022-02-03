import React, { useState, useEffect } from "react";
import UserService from "../../services/userServices";
import { useParams } from "react-router";
import { List, Item, Grid, Image} from "semantic-ui-react";
import '../../App';
import image from "../../images/background1.gif";

export default function UserDetail() {
  let { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    let userService = new UserService();
    userService.getByUserId(id).then((result) => setUser(result.data));
  }, [id]);
  if (user)
    return (
    <>
    
     
    <div className='userdetail' style={{ backgroundImage: `url(${image})` }}>

    <br/><br/>
    <Grid style={{marginLeft:"250px" ,marginTop:"50px", width:"1020px", height:"500px",  borderRadius: "15px", border:"solid", borderWidth:"0.5px" , borderColor:"000",}}  >
          <Grid.Row >
            <Grid.Column width={4}>
              <Item>
              <Image src={user.picture} 
               style={{ width:" 150px", height: "150px",
       borderRadius: '50%',
     border: '3px solid #fff' 
    }}
     />
                <Item.Description>
                <br/><br/>
                  {" "}
                  {user.id ? "ID:" + user.id : ""}
                </Item.Description>
              </Item>
            </Grid.Column>
            <Grid.Column width={5} >
              <Item>
                <Item.Content>
                  <Item.Header as="h3" style={{marginTop:"20px",}}>{` ${
                    user.firstName ? user.firstName : ""
                  } ${user.lastName ? user.lastName : ""}`}</Item.Header>
                  <Item.Description>
                    <List>
                      <List.Item>{user.gender}</List.Item>
                      <List.Item>{user.email}</List.Item>
                      <List.Item>{user.phone}</List.Item>
                      <List.Item>{user.dateOfBirth}</List.Item>
                    </List>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Grid.Column>
            <Grid.Column width={5}>
              <Item>
                {user.location && (
                  <Item.Content >
                    <Item.Header as="h3"  style={{ marginTop:"15px"}}>Adress</Item.Header>
                    <Item.Description>
                      <List>
                        <List.Item>{user.location.street}</List.Item>
                        <List.Item>{user.location.city}</List.Item>
                        <List.Item>{user.location.state}</List.Item>
                        <List.Item>{user.location.country}</List.Item>
                      </List>
                    </Item.Description>
                  </Item.Content>
                )}
              </Item>
            </Grid.Column>
            <Grid.Column width={5}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12044.876985673047!2d28.8842844!3d40.9985742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee6d36d3411ede67!2zRGVjYXRobG9uIEdlbmVsIE3DvGTDvHJsw7xr!5e0!3m2!1str!2str!4v1643899494066!5m2!1str!2str"
                mapTypeControl={false}
                width="470"
                height="270"
                style={{ borderRadius: "15px", border:"solid", borderWidth:"0.5px" , borderColor:"000",marginTop:"-30px", marginLeft:"250px" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Grid.Column>
          </Grid.Row>
        </Grid>

    <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
     


    </>
  );
}





