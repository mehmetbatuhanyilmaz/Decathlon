
import axios from "axios"

export default class UserService{
getUsers(){
    return axios.get("https://dummyapi.io/data/v1/user?limit=10", {
        headers:{ 'app-id': '61f8627b955e8c334aa7740d'}
    });
  }
  getByUserId(id){
    return axios.get("https://dummyapi.io/data/v1/user/"+id, {
        headers:{ 'app-id': '61f8627b955e8c334aa7740d'}
    });
  }
}