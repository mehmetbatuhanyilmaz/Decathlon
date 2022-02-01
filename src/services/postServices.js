import axios from "axios"

export default class PostService{
    getPosts(){
        return axios.get("https://dummyapi.io/data/v1/post?limit=12", {
            headers:{ 'app-id': '61f8627b955e8c334aa7740d'}

        });

    }

}